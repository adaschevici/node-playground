import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
