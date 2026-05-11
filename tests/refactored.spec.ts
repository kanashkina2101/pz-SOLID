import { InMemoryOrderRepository, EmailNotificationService, ConsoleLogger, OrderService } from '../src/refactored';
import { Order } from '../src/interfaces';

class TestLogger extends ConsoleLogger {
    messages: string[] = [];
    log(message: string): void {
        this.messages.push(message);
    }
}

describe('OrderService refactored', () => {
    it('should process order and save updated status', () => {
        const repository = new InMemoryOrderRepository();
        const logger = new TestLogger();
        const notificationService = new EmailNotificationService();
        const orderService = new OrderService(repository, notificationService, logger);

        const order: Order = {
            id: 'order-1',
            email: 'test@example.com',
            status: 'draft',
            items: [
                { name: 'Book A', price: 100, quantity: 1 },
                { name: 'Book B', price: 50, quantity: 2 }
            ]
        };

        orderService.process(order);

        const saved = repository.getById('order-1');
        expect(saved).toBeDefined();
        expect(saved?.status).toBe('processed');
        expect(logger.messages.some((msg) => msg.includes('processed'))).toBe(true);
    });
});
