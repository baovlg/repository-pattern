import { Inject, Injectable } from '@nestjs/common';
import {
  UserRepository,
  UserRepositoryInterface,
} from 'src/shared/repositories';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.userRepository.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
