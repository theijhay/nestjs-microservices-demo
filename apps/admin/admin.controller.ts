import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AdminService } from './admin.service';
import { CreateAdminDto } from '@libs/dto';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @EventPattern('admin.create')
  handleUserCreate(@Payload() data: CreateAdminDto) {
    this.adminService.create(data);
  }
}
