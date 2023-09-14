import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, DeleteResult, UpdateResult } from 'typeorm';
import { CarEntity } from './car.entity';
import { CarDto } from './dto/car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectDataSource()
    public dataSource: DataSource,
  ) {}

  public carRepository = this.dataSource.getRepository(CarEntity);

  getAllCarsByUserId(userId: number): Promise<CarEntity[]> {
    return this.carRepository.find({
      where: {
        user: userId,
      },
    });
  }

  getOneCarById(id: number): Promise<CarEntity> {
    return this.carRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  createCar(car: CarDto): Promise<CarDto & CarEntity> {
    return this.carRepository.save(car);
  }

  updateCar(id: number, car: CarDto): Promise<UpdateResult> {
    return this.carRepository.update(id, car);
  }

  deleteCarById(id: number): Promise<DeleteResult> {
    return this.carRepository.delete(id);
  }
}
