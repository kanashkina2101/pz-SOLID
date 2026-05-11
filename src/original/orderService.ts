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

export class OrderService {
    createOrder(order: Order) {
        order.status = 'new';
        this.log(`Order ${order.id} created with ${order.items.length} items`);
        this.save(order);
        this.sendConfirmation(order);
    }

    processOrder(order: Order) {
        if (!order.items.length) {
            this.log('Cannot process empty order');
            return;
        }

        const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        order.status = 'processed';
        this.log(`Order ${order.id} processed, total = ${total}`);
        this.save(order);
        this.sendNotification(order, total);
    }

    private save(order: Order) {
        // Збереження даних у «базі»
        this.log(`Saving order ${order.id} to database`);
    }

    private sendConfirmation(order: Order) {
        // Надсилання підтвердження користувачу
        this.log(`Sending confirmation to ${order.email}`);
    }

    private sendNotification(order: Order, total: number) {
        this.log(`Sending payment request to ${order.email} for ${total}`);
    }

    private log(message: string) {
        console.log(`[OrderService] ${message}`);
    }
}
