import { Controller, Get } from "@nestjs/common";
import {
  ApiTags,
} from '@nestjs/swagger';
import { RestaurantVm } from '../viewModels/RestaurantVm';
import {RestaurantUseCases} from '../../application/use-cases/RestaurantUseCases'

@ApiTags('Restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantUseCases: RestaurantUseCases) {}

  @Get()
  async getRestaurants(): Promise<RestaurantVm[]> {
    const restaurants = this.restaurantUseCases.getRestaurants();
    return (await restaurants).map(restaurant => RestaurantVm.toViewModel(restaurant));
  }
}
