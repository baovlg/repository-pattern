import { BaseAbstractRepository } from '../base';
import { UserEntity } from '../../entities';

export interface UserRepositoryInterface
  extends BaseAbstractRepository<UserEntity> {}
