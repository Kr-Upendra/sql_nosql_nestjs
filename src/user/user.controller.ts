import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // SQL Routes
  @Post('sql')
  createSQLUser(@Body('name') name: string, @Body('email') email: string) {
    return this.userService.createSQLUser(name, email);
  }

  @Get('sql')
  findAllSQLUsers() {
    return this.userService.findSQLAll();
  }

  // NoSQL Routes
  @Post('nosql')
  createNoSQLUser(@Body('name') name: string, @Body('email') email: string) {
    return this.userService.createNoSQLUser(name, email);
  }

  @Get('nosql')
  findAllNoSQLUsers() {
    return this.userService.findNoSQLAll();
  }
}
