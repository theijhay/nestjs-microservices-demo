import { Injectable, Logger } from '@nestjs/common';
import { CreateAmbassadorDto } from '@libs/dto';

@Injectable()
export class AmbassadorService {
  private readonly logger = new Logger(AmbassadorService.name);

  create(dto: CreateAmbassadorDto) {
    // Simulate Ambassador creation logic
    this.logger.log(`✅ Ambassador created: ${JSON.stringify(dto)}`);
  }
}