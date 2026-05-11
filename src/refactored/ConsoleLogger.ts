import { ILogger } from '../interfaces';

export class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(`[ConsoleLogger] ${message}`);
    }
}
