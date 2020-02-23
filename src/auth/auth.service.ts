import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
      ) {}

    async validateUser(username: string,pass: string): Promise<any>{
        let user = await this.usersService.findOne(username);
        if (user[0] && user[0].password === pass){
                const {password, ...result} = user;
                return result;
        }
        return null
    }

    async login(user: any) {
        const payload = { username: user[0].username, sub: user[0]._id };
        return {user: user[0],access_token:  this.jwtService.sign(payload)}
    }
}
