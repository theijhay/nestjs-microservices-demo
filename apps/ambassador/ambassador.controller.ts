import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AmbassadorService } from './ambassador.service';
import { CreateAmbassadorDto } from '@libs/dto';

@Controller()
export class AmbassadorController {
  constructor(private readonly ambassadorService: AmbassadorService) {}

  @EventPattern('ambassador.create')
  handleUserCreate(@Payload() data: CreateAmbassadorDto) {
    this.ambassadorService.create(data);
  }
}
