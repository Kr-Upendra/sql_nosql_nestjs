import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InjectModel as MongoInjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User as SQLUser } from './user.entity';
import { User as NoSQLUser } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(SQLUser)
    private sqlUserModel: typeof SQLUser,
    @MongoInjectModel(NoSQLUser.name)
    private noSqlUserModel: Model<NoSQLUser>,
  ) {}

  // SQL Services
  async createSQLUser(name: string, email: string): Promise<SQLUser> {
    return this.sqlUserModel.create({ name, email });
  }

  async findSQLAll(): Promise<SQLUser[]> {
    return this.sqlUserModel.findAll();
  }

  // NoSQL Services
  async createNoSQLUser(name: string, email: string): Promise<NoSQLUser> {
    const newUser = new this.noSqlUserModel({ name, email });
    return newUser.save();
  }

  async findNoSQLAll(): Promise<NoSQLUser[]> {
    return this.noSqlUserModel.find().exec();
  }
}
