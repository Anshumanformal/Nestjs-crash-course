import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from "./items/items.module"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import config from "./config/keys"

@Module({
  imports: [
  ConfigModule.forRoot(),
  ItemsModule,
  MongooseModule.forRoot(config.mongodbURI),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
