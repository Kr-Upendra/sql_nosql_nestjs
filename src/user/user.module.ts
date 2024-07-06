import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User as SQLUser } from './user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { User as NoSQLUser, UserSchema } from './user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([SQLUser]),
    MongooseModule.forFeature([{ name: NoSQLUser.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
