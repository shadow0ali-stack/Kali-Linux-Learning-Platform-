export class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
  }

  emit(event, payload) {
    const handlers = this.listeners[event] || [];
    handlers.forEach((handler) => handler(payload));
  }
}
