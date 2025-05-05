import { Injectable, Logger } from '@nestjs/common';
import { CreateAdminDto } from '@libs/dto';

@Injectable()
export class AdminService {
  private readonly logger = new Logger(AdminService.name);

  create(dto: CreateAdminDto) {
    // Simulate Admin creation logic
    this.logger.log(`✅ Admin created: ${JSON.stringify(dto)}`);
  }
}