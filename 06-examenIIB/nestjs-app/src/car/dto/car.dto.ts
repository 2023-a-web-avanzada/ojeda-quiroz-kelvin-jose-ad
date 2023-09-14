import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CarDto {
  @IsNotEmpty()
  @IsString()
  registration: string;

  @IsNotEmpty()
  @IsDate()
  dateCar: Date;

  @IsNotEmpty()
  @IsNumber()
  mileage: number;

  @IsNotEmpty()
  @IsBoolean()
  isNew: boolean;

  @IsNotEmpty()
  @IsNumber()
  user: number;
}
