import {
  DeepPartial,
  FindOneOptions,
  FindManyOptions,
  Repository,
  FindOptionsWhere,
} from 'typeorm';
import { BaseRepositoryInterface } from './base.repository.interface';

interface HasId {
  id: number;
}

export class BaseAbstractRepository<T extends HasId>
  implements BaseRepositoryInterface<T>
{
  constructor(private readonly repository: Repository<T>) {}

  create(data: DeepPartial<T>): T {
    return this.repository.create(data);
  }
  createMany(data: DeepPartial<T>[]): T[] {
    return this.repository.create(data);
  }
  save(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }
  saveMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.repository.save(data);
  }
  findOneById(id: any): Promise<T> {
    const options: FindOptionsWhere<T> = { id: id };
    return this.repository.findOneBy(options);
  }
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(filterCondition);
  }
  findMany(filterCondition: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(filterCondition);
  }
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(relations);
  }
  remove(data: T): Promise<T> {
    return this.repository.remove(data);
  }
  preload(entityLike: DeepPartial<T>): Promise<T> {
    return this.repository.preload(entityLike);
  }
  hasId(id: any): boolean {
    return this.repository.hasId(id);
  }
}
