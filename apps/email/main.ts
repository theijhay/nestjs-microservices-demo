import { NestFactory } from '@nestjs/core';
import { EmailModule } from './email.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { createKafkaConfig} from '@libs/kafka.config';

async function bootstrap() {
  const kafkaOptions = createKafkaConfig('email-service', 'email-consumer-group');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmailModule,
    {
      transport: Transport.KAFKA,
      options: kafkaOptions,
    },
  );

  await app.listen();
  console.log('📨 Email Microservice is running and listening for Kafka events...');
}
bootstrap();
