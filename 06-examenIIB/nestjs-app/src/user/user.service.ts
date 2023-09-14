import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import {
  DataSource,
  DeleteResult,
  FindManyOptions,
  UpdateResult,
} from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectDataSource()
    public dataSource: DataSource,
  ) {}

  public userRepository = this.dataSource.getRepository(UserEntity);

  getAllUsers(options: FindManyOptions<UserEntity>): Promise<UserEntity[]> {
    return this.userRepository.find(options);
  }

  getOneUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  createUser(department: UserDto): Promise<UserDto & UserEntity> {
    return this.userRepository.save(department);
  }

  updateUser(id: number, department: UserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, department);
  }

  deleteUserById(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
