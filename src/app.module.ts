import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
