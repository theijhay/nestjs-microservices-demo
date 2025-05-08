import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;

  constructor() {
    this.kafka = new Kafka({
      brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
      clientId: 'monolith-app',
    });

    this.producer = this.kafka.producer();
  }

  async onModuleInit() {
    await this.producer.connect();
    console.log('✅ Kafka Producer connected');
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  async emit(topic: string, payload: Record<string, any>) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(payload) }],
    });

    console.log(`📤 Kafka event emitted on topic "${topic}"`);
  }
}
