import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CheckoutService } from './checkout.service';

@Controller()
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @EventPattern('checkout.order')
  handleUserCreate(@Payload() data: any) {
    this.checkoutService.create(data);
  }
}
