import { CarEntity } from './car.entity';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity], 'default')],
  controllers: [],
  providers: [CarService],
  exports: [CarService],
})
export class EventosModule {}
