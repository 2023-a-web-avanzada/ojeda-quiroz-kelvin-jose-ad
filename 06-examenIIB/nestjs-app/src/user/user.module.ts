import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], 'default')],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class EventosModule {}
