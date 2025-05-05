import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { createKafkaConfig } from '@libs/kafka.config';

async function bootstrap() {
  const kafkaOptions = createKafkaConfig('admin-service', 'admin-consumer-group');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AdminModule,
    {
      transport: Transport.KAFKA,
      options: kafkaOptions,
    },
  );

  await app.listen();
  console.log('🚀 Admin Microservice is running and listening for Kafka events...');
}
bootstrap();