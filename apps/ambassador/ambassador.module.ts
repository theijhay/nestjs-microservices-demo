import { Module } from '@nestjs/common';
import { AmbassadorController } from './ambassador.controller';
import { AmbassadorService } from './ambassador.service';
import { ConfigModule } from '@nestjs/config';

@Module({
imports: [ConfigModule.forRoot({ isGlobal: true })],
controllers: [AmbassadorController],
providers: [AmbassadorService],
})
export class AmbassadorModule {}
