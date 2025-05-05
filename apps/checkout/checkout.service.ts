import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CheckoutService {
  private readonly logger = new Logger(CheckoutService.name);

  create(dto: any) {
    // Simulate checkout creation logic
    this.logger.log(`✅ Order received: ${JSON.stringify(dto)}`);
  }
}