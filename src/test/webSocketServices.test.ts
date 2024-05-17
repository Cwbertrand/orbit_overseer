import WebSocketService from "../app/redux/slice/WebSocketService";
import { MockWebSocket } from "./mockWebSocket";

// Override the global WebSocket with the mock
global.WebSocket = MockWebSocket as any;

describe('WebSocketService', () => {
    let webSocketService: WebSocketService;

    beforeEach(() => {
        // Reset the singleton instance
        (WebSocketService as any).instance = null;
        webSocketService = WebSocketService.getInstance();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('should create a singleton instance of the websocket', () => {
        const instance1 = WebSocketService.getInstance();
        const instance2 = WebSocketService.getInstance();
        expect(instance1).toBe(instance2);
    });

    it('should initially have a null socket', () => {
        expect(webSocketService.socket).toBeNull();
    });

    it('should establish a connection to the WebSocket server', () => {
        webSocketService.connect();

        // Access the mock instance

        // Assuming webSocketService.socket is either a WebSocket or null
        if (webSocketService.socket instanceof MockWebSocket) {
            const mockSocketInstance = webSocketService.socket as MockWebSocket;
            mockSocketInstance.triggerOpen(new Event('open'));
        } else {
            console.error("websocket error")
        }

        // Check if the socket is connected
        expect(webSocketService.isConnected()).toBe(true);
    });

    it('should send an initial message upon connection', () => {
        const initialMessage = { type: 'test' };
        webSocketService.connect(initialMessage);

        // Access the mock instance
        if (webSocketService.socket instanceof MockWebSocket) {

            const mockSocketInstance = webSocketService.socket as MockWebSocket;
            mockSocketInstance.triggerOpen(new Event('open'));
            expect(mockSocketInstance.send).toHaveBeenCalledWith(JSON.stringify(initialMessage));

        } else {
            console.error("websocket error")
        }
    });

    it('should handle received messages', () => {
        const mockMessageHandler = jest.fn();
        const mockData = JSON.stringify({ data: 'test' });
        const mockEvent = { data: mockData } as MessageEvent;

        webSocketService.connect(undefined, mockMessageHandler);

        // Access the mock instance
        if (webSocketService.socket instanceof MockWebSocket) {

            const mockSocketInstance = webSocketService.socket as MockWebSocket;
            mockSocketInstance.triggerMessage(mockEvent);

            // Check if the message handler was called with the parsed data
            expect(mockMessageHandler).toHaveBeenCalledWith(JSON.parse(mockData));

        } else {
            console.error("websocket error")
        }
    });

    it('should close the WebSocket connection', () => {
        webSocketService.connect();
        webSocketService.disconnect();

        if (webSocketService.socket instanceof MockWebSocket) {

            const mockSocketInstance = webSocketService.socket as MockWebSocket;

            // Check if the close method was called
            expect(mockSocketInstance.close).toHaveBeenCalled();

        } else {
            console.error("websocket error")
        }
    
    });


});