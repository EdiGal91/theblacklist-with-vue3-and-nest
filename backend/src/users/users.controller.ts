import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: UserDto) {
    const user = this.usersService.findUserByEmail(createUserDto.email);
    if (user) {
      throw new HttpException(`User with email ${createUserDto.email} already exists`, HttpStatus.CONFLICT);
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findUser(@Query('email') email: string) {
    const user = this.usersService.findUserByEmail(email);
    if (user) {
      return user
    }
    throw new HttpException(`User with email ${email} not found`, HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete()
  remove(@Query('email') email: string) {
    const user = this.usersService.findUserByEmail(email);
    if (!user) {
      throw new HttpException(`User with email ${email} not found`, HttpStatus.NOT_FOUND);
    }
    return this.usersService.removeByEmail(email);
  }
}
