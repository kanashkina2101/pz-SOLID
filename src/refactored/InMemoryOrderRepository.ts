import { IOrderRepository, Order } from '../interfaces';

export class InMemoryOrderRepository implements IOrderRepository {
    private orders: Record<string, Order> = {};

    save(order: Order): void {
        this.orders[order.id] = { ...order };
    }

    getById(id: string): Order | undefined {
        return this.orders[id];
    }
}
