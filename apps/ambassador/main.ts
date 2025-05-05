import { NestFactory } from '@nestjs/core';
import { AmbassadorModule } from './ambassador.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { createKafkaConfig } from '@libs/kafka.config';

async function bootstrap() {
  const kafkaOptions = createKafkaConfig('ambassador-service', 'ambassador-consumer-group');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AmbassadorModule,
    {
      transport: Transport.KAFKA,
      options: kafkaOptions,
    },
  );

  await app.listen();
  console.log('🚀 Admin Microservice is running and listening for Kafka events...');
}
bootstrap();