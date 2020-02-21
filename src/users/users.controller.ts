import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post('/register')
  async create(@Body() user: User):Promise<any> {
    return this.usersService.register(user);
  }
}