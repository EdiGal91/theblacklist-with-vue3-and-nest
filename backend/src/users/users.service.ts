import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  #users = [];
  create(createUserDto: UserDto) {
    this.#users.push(createUserDto);
    return createUserDto;
  }

  findUserByEmail(email: string) {
    return this.#users.find(user => user.email === email);
  }

  update(id: number, updateUserDto: UserDto) {
    return `This action updates a #${id} user`;
  }

  removeByEmail(email: string) {
    this.#users = this.#users.filter(user => user.email !== email);
  }
}
