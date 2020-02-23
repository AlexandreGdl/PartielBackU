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
        return this.userModel.find({email: username});

    }

    async register(user: User): Promise<any>{
        const registeredUser = new this.userModel(user);
        const exist = await this.userModel.find({email: user.email});
            if (exist[0]){
                return {message: 'User already exist',status:409};
            } else {
                try{
                    registeredUser.save();
                } catch(err){
                    return err
                }
                return {message: 'User created',code: 201}
            }
    }

}
