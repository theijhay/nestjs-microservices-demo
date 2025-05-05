import { KafkaOptions } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

export const createKafkaConfig = (clientId: string, groupId: string): KafkaOptions['options'] => ({
  client: {
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
    clientId,
  },
  consumer: {
    groupId,
  },
});