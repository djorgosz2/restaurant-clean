import { Module } from '@nestjs/common';

import { IRestaurantRepository } from '../../application/ports/IRestaurantRepository'
import { RestaurantUseCases } from '../../application/use-cases/RestaurantUseCases';
import { RestaurantRepository } from '../database/repositories/RestaurantRepository';
import { RestaurantController } from '../../presentation/controllers/RestaurantController';

@Module({
  imports: [],
  controllers: [RestaurantController],
  providers: [
    RestaurantUseCases,
    { provide: IRestaurantRepository, useClass: RestaurantRepository },
  ],
})
export class RestaurantModule {}
