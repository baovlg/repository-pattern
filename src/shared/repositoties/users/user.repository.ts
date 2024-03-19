import { UserEntity } from 'src/shared/entities';
import { BaseAbstractRepository } from '../base';
import { UserInterfaceRepository } from './user.interface.repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable() // TODO: Research
export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserInterfaceRepository
{
  constructor(
    @InjectRepository(UserEntity) // TODO: Research
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
