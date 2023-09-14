import { UserEntity } from './user.entity';
import { DataSource, DeleteResult, FindManyOptions, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    userRepository: import("typeorm").Repository<UserEntity>;
    getAllUsers(options: FindManyOptions<UserEntity>): Promise<UserEntity[]>;
    getOneUserById(id: number): Promise<UserEntity>;
    createUser(department: UserDto): Promise<UserDto & UserEntity>;
    updateUser(id: number, department: UserDto): Promise<UpdateResult>;
    deleteUserById(id: number): Promise<DeleteResult>;
}
