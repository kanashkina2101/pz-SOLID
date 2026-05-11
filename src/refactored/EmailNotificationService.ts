import { INotificationService, Order } from '../interfaces';

export class EmailNotificationService implements INotificationService {
    notifyOrderCreated(order: Order): void {
        console.log(`[EmailNotificationService] Order ${order.id} created for ${order.email}`);
    }

    notifyOrderProcessed(order: Order, total: number): void {
        console.log(`[EmailNotificationService] Order ${order.id} processed, total=${total}`);
    }
}
