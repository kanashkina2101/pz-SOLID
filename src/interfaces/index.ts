export type OrderItem = {
    name: string;
    price: number;
    quantity: number;
};

export type Order = {
    id: string;
    items: OrderItem[];
    status: string;
    email: string;
};

export interface IOrderRepository {
    save(order: Order): void;
    getById(id: string): Order | undefined;
}

export interface INotificationService {
    notifyOrderCreated(order: Order): void;
    notifyOrderProcessed(order: Order, total: number): void;
}

export interface ILogger {
    log(message: string): void;
}

export interface IOrderProcessor {
    process(order: Order): void;
}
