import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CarEntity } from './car/car.entity';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/database.sqlite',
      entities: [UserEntity, CarEntity],
      synchronize: true,
      dropSchema: false,
    }),
  ],
  controllers: [AppController, UserController, CarController],
  providers: [AppService, UserService, CarService],
})
export class AppModule {}
