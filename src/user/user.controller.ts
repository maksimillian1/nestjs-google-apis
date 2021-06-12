import { Body, Controller, Get, HttpException, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createUser(@Body() user: any): Promise<User> {
    if(!user.password) {
      throw new HttpException('Missing password', 422);
    }
    return this.userService.create(user);
  }
}
