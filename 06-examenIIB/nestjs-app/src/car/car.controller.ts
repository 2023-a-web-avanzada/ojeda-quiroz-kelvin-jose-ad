import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarEntity } from './car.entity';
import { CarDto } from './dto/car.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  // http://localhost:3030/cars?department-id=<user-id>
  @Get('by-user/:id')
  getAllCarsByDepartmentId(@Param('id') userId: number): Promise<CarEntity[]> {
    return this.carService.getAllCarsByUserId(userId);
  }

  // http://localhost:3030/cars?id=<car-id>
  @Get(':id')
  getOneCarById(@Param('id') id: number): Promise<CarEntity> {
    return this.carService.getOneCarById(id);
  }

  // http://localhost:3030/cars/create
  @Post('create')
  createCar(@Body() car: CarDto): Promise<CarDto & CarEntity> {
    return this.carService.createCar(car);
  }

  // http://localhost:3030/cars?id=<car-id>
  @Put(':id')
  updateCar(
    @Param('id') id: number,
    @Body() car: CarDto,
  ): Promise<UpdateResult> {
    return this.carService.updateCar(id, car);
  }

  // http://localhost:3030/cars?id=<car-id>
  @Delete(':id')
  deleteCarById(@Param('id') id: number): Promise<DeleteResult> {
    return this.carService.deleteCarById(id);
  }
}
