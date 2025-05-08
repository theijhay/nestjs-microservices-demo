import { Module } from '@nestjs/common';
import { KafkaProducerService } from './kafka.producer';

@Module({
  providers: [KafkaProducerService],
  exports: [KafkaProducerService],
})
export class KafkaModule {}
