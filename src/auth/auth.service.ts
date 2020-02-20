import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService){}

    async validateUser(username: string,pass: string): Promise<any>{
        let user = await this.usersService.findOne(username);
        if (user[0] && user[0].password === pass){
                const {password, ...result} = user;
                return {username: user[0].username,email: user[0].email,_id: user[0]._id};
        }
        return null
    }
}
