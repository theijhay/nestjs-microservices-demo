import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from '@libs/dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('user.create')
  handleUserCreate(@Payload() data: CreateUserDto) {
    this.userService.create(data);
  }
}
