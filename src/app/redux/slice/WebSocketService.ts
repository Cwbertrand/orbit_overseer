const wsURL = "wss://space-operators-bb2423167918.herokuapp.com/";

export type InitialMessage = {
    type: string;
    data: {
        gameId: string;
        playerId: string;
        playerName: string;
    };
};

// Type for the function to handle received messages
type ReceivedMessage = (message: string) => void;

class WebSocketService {
    private socket: WebSocket | null;
    private initialMessage: string | null;
    private receivedMessage?:  ReceivedMessage;
    
    constructor() {
        // Initialize socket and initialMessage
        this.socket = null;
        this.initialMessage = null;
    }

    // Check if the WebSocket connection is open
    isConnected() {
        return this.socket && this.socket.readyState === WebSocket.OPEN;
    }

    connect(initialMessage?: InitialMessage, onMessage?: ReceivedMessage) {
        this.socket = new WebSocket(wsURL);

        // Convert initialMessage to JSON string and store it
        this.initialMessage = initialMessage ? JSON.stringify(initialMessage) : null;

        // Store the function to handle received messages
        this.receivedMessage = onMessage;

        // WebSocket event handlers

        this.socket.onopen = () => {
            console.log('WebSocket Connected');

            // Send the initial message if available
            if (this.initialMessage) {
                if (this.socket != null) {
                    this.socket.send(this.initialMessage);
                    this.initialMessage = null;
                }
            }
        };

        this.socket.onerror = (error: Event) => {
            console.error('WebSocket Error: ', error);
        };

        // Handle received messages
        this.socket.onmessage = (e: MessageEvent) => {
            console.log('Receive:', e.data);
            if (e.data === "ping"){
                return;
            }
            if (this.receivedMessage){
                this.receivedMessage(e.data);
            }
        };

        this.socket.onclose = (e: CloseEvent) => {
            console.log('WebSocket Disconnected', e.reason);
        };
    }

    // Disconnect from WebSocket server
    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

const webSocketService = new WebSocketService();
export default webSocketService;
