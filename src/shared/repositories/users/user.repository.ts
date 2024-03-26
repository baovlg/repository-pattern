import { UserEntity } from 'src/shared/entities';
import { BaseAbstractRepository } from '../base';
import { UserRepositoryInterface } from './user.repository.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<UserEntity>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
