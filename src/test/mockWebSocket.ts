export class MockWebSocket {
    public send = jest.fn();
    public close = jest.fn();
    public readyState = WebSocket.OPEN;
    public onopen: ((this: WebSocket, ev: Event) => any) | null = null;
    public onerror: ((this: WebSocket, ev: Event) => any) | null = null;
    public onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null = null;
    public onclose: ((this: WebSocket, ev: CloseEvent) => any) | null = null;

    // Mock methods to trigger events
    public triggerOpen(event: Event) {
        if (this.onopen) this.onopen.call((this as any), event);
    }
    
    public triggerError(event: Event) {
        if (this.onerror) this.onerror.call((this as any), event);
    }
    
    public triggerMessage(event: MessageEvent) {
        if (this.onmessage) this.onmessage.call((this as any), event);
    }
    
    public triggerClose(event: CloseEvent) {
        if (this.onclose) this.onclose.call((this as any), event);
    }
}