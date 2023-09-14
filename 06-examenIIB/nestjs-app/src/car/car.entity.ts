import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'registration',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  registration: string;

  @Column({
    name: 'dateCar',
    type: 'datetime',
    nullable: false,
  })
  dateCar: Date;

  @Column({
    name: 'mileage',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    nullable: false,
  })
  mileage: number;

  @Column({
    name: 'isNew',
    type: 'boolean',
    default: false,
    nullable: false,
  })
  isNew: boolean;

  @Column({
    name: 'user',
    type: 'integer',
    default: 0,
    nullable: false,
  })
  user: number;
}
