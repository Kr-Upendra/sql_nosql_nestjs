import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.SQL_DATABASE_URL,
      autoLoadModels: true,
      synchronize: true,
      models: [User],
    }),

    MongooseModule.forRoot(process.env.NOSQL_DATABASE_URL),
    UserModule,
  ],
})
export class AppModule {}
