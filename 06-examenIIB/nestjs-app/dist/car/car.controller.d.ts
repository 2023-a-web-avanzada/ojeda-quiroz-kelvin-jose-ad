import { CarService } from './car.service';
import { CarEntity } from './car.entity';
import { CarDto } from './dto/car.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    getAllCarsByDepartmentId(userId: number): Promise<CarEntity[]>;
    getOneCarById(id: number): Promise<CarEntity>;
    createCar(car: CarDto): Promise<CarDto & CarEntity>;
    updateCar(id: number, car: CarDto): Promise<UpdateResult>;
    deleteCarById(id: number): Promise<DeleteResult>;
}
