import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { createKafkaConfig } from '@libs/kafka.config';

async function bootstrap() {
  const kafkaOptions = createKafkaConfig('user-service', 'user-consumer-group');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.KAFKA,
      options: kafkaOptions,
    },
  );

  await app.listen();
  console.log('🚀 User Microservice is running and listening for Kafka events...');
}
bootstrap();