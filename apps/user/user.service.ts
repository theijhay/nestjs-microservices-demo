import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '@libs/dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  create(dto: CreateUserDto) {
    // Simulate user creation logic
    this.logger.log(`✅ User created: ${JSON.stringify(dto)}`);
  }
}