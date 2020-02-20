import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    async findOne(username: string):Promise<User | undefined>{
        return this.userModel.find({username: username});

    }

}
