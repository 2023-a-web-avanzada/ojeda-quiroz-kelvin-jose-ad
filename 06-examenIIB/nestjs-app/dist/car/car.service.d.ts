import { DataSource, DeleteResult, UpdateResult } from 'typeorm';
import { CarEntity } from './car.entity';
import { CarDto } from './dto/car.dto';
export declare class CarService {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    carRepository: import("typeorm").Repository<CarEntity>;
    getAllCarsByUserId(userId: number): Promise<CarEntity[]>;
    getOneCarById(id: number): Promise<CarEntity>;
    createCar(car: CarDto): Promise<CarDto & CarEntity>;
    updateCar(id: number, car: CarDto): Promise<UpdateResult>;
    deleteCarById(id: number): Promise<DeleteResult>;
}
