import { BaseAbstractRepository } from '../base';
import { UserEntity } from '../../entities';

export interface UserInterfaceRepository
  extends BaseAbstractRepository<UserEntity> {}
