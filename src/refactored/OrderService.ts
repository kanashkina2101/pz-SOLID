import { IOrderRepository, INotificationService, ILogger, Order, IOrderProcessor } from '../interfaces';

export class OrderService implements IOrderProcessor {
    constructor(
        private readonly repository: IOrderRepository,
        private readonly notificationService: INotificationService,
        private readonly logger: ILogger
    ) { }

    process(order: Order): void {
        this.logger.log(`Creating order ${order.id}`);
        order.status = 'new';
        this.repository.save(order);
        this.notificationService.notifyOrderCreated(order);

        const total = this.calculateTotal(order);
        order.status = 'processed';
        this.repository.save(order);
        this.notificationService.notifyOrderProcessed(order, total);
        this.logger.log(`Order ${order.id} processed with total ${total}`);
    }

    private calculateTotal(order: Order): number {
        return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}
