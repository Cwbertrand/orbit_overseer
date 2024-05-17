const wsURL = "wss://space-operators-bb2423167918.herokuapp.com/";

class WebSocketService {
    public socket: WebSocket | null;
    private initialMessage: any | null;
    private receivedMessage?:  any | null;
    private static instance: WebSocketService | null = null;
    
    constructor() {
        // Initialize socket and initialMessage
        this.socket = null;
        this.initialMessage = null;
    }

    // Method to get the singleton instance of the WebSocketService
    public static getInstance(): WebSocketService {
        if (!WebSocketService.instance) {
            // If no instance has been created yet, create one
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    // Check if the WebSocket connection is open
    public isConnected(): boolean {
        return this.socket !== null && this.socket.readyState === WebSocket.OPEN;
    }

    public connect(initialMessage?: any, onMessage?: (message: any) => void) {
        if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
            this.socket = new WebSocket(wsURL);
            // Convert initialMessage to JSON string and store it
            this.initialMessage = (typeof initialMessage === 'string') ? initialMessage : JSON.stringify(initialMessage);
            // Store the function to handle received messages
            this.receivedMessage = onMessage;

            this.socket.onopen = () => {
                console.log('WebSocket Connected');
                // Send the initial message if available
                if (this.initialMessage && this.socket) {
                    this.socket.send(this.initialMessage);
                    this.initialMessage = null;
                }
            };
        }

        this.socket.onerror = (error: Event) => {
            console.error('WebSocket Error: ', error);
        };

        // Handle received messages
        this.socket.onmessage = (e: any) => {
            if (e.data === "ping"){
                return;
            }
            try {
                const parsedData = JSON.parse(e.data);
                if (this.receivedMessage) {
                    this.receivedMessage(parsedData);
                }
            } catch (error) {
                console.error('Error parsing JSON from WebSocket message:', error);
            }
        };
    }

    // Disconnect from WebSocket server
    public disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default WebSocketService;
