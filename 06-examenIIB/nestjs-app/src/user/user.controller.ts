import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // http://localhost:3030/users
  @Get()
  getAllUsers(): Promise<UserEntity[]> {
    const options = {};
    return this.userService.getAllUsers(options);
  }

  // http://localhost:3030/users?id=<user-id>
  @Get(':id')
  getOneUserById(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.getOneUserById(id);
  }

  // http://localhost:3030/users/create
  @Post('create')
  createUser(@Body() user: UserDto): Promise<UserDto & UserEntity> {
    return this.userService.createUser(user);
  }

  // http://localhost:3030/user?id=<user-id>
  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() user: UserDto,
  ): Promise<UpdateResult> {
    return this.userService.updateUser(id, user);
  }

  // http://localhost:3030/users?id=<user-id>
  @Delete(':id')
  deleteUserById(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUserById(id);
  }
}
