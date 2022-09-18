import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from "./infrastructure/ioc/RestaurantModule";
import * as ormconfig from 'ormconfig'

@Module({
  imports: [
    RestaurantModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
  ],
  providers: [
  ],
})
export class AppModule {}
