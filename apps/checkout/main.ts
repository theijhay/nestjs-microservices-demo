import { NestFactory } from '@nestjs/core';
import { CheckoutModule } from './checkout.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { createKafkaConfig } from '@libs/kafka.config';

async function bootstrap() {
  const kafkaOptions = createKafkaConfig('checkout-service', 'checkout-consumer-group');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CheckoutModule,
    {
      transport: Transport.KAFKA,
      options: kafkaOptions,
    },
  );

  await app.listen();
  console.log('🚀 Checkout Microservice is running and listening for Kafka events...');
}
bootstrap();