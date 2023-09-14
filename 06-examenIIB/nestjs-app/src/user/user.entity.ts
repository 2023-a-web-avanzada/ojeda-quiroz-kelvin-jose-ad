import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 200,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'year',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
    nullable: false,
  })
  year: number;

  @Column({
    name: 'isMaritate',
    type: 'boolean',
    default: true,
    nullable: false,
  })
  isMaritate: boolean;
}
