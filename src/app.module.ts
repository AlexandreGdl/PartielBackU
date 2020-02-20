import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule,MongooseModule.forRoot('mongodb://localhost/partiel',{ useUnifiedTopology: true , useNewUrlParser: true }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
