type EventBusCallback<T extends unknown[] = any[]> = (...args: T) => void;
type EventBusListeners = Record<string, Array<EventBusCallback>>;

interface IEventBus {
	on(event: string, callback: EventBusCallback): void;
	off(event: string, callback: EventBusCallback): void;
	emit(event: string, ...args: Array<unknown>): void;
}

export default class EventBus implements IEventBus {
	private listeners: EventBusListeners = {};

	on(event: string, callback: EventBusCallback) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}
    this.listeners[event]!.push(callback);
	}

	off(event: string, callback: EventBusCallback) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event]!.filter(
			(listener) => listener !== callback,
		);
	}

	emit(event: string, ...args: Array<unknown>) {
		if (!this.listeners[event]) {
			return;
			// throw new Error(`Нет события: ${event}`);
		}

    this.listeners[event]!.forEach((listener) => { listener(...args); });
	}
}
