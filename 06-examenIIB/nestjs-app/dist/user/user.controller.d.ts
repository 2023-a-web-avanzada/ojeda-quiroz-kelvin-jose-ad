import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserEntity[]>;
    getOneUserById(id: number): Promise<UserEntity>;
    createUser(user: UserDto): Promise<UserDto & UserEntity>;
    updateUser(id: number, user: UserDto): Promise<UpdateResult>;
    deleteUserById(id: number): Promise<DeleteResult>;
}
