import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ecommerce'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
