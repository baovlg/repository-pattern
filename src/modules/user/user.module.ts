import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from '../../shared/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: 'UserRepositoryInterface', useClass: UserRepository },
  ],
})
export class UserModule {}
