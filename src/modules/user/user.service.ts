import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepositoryInterface } from 'src/shared/repositories';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findMany({});
  }

  findOne(id: number) {
    return this.userRepository.findOneById(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (!this.userRepository.hasId(id)) {
      throw new NotFoundException();
    }

    const user = await this.userRepository.findOneById(id);
    return this.userRepository.save(Object.assign(user, updateUserDto));
  }

  async remove(id: number) {
    if (!this.userRepository.hasId(id)) {
      throw new NotFoundException();
    }

    const user = await this.userRepository.findOneById(id);
    return this.userRepository.remove(user);
  }
}
