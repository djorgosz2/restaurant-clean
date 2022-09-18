import { Restaurant } from "../../domain/models/Restaurant";
import { IRestaurantRepository } from "../ports/IRestaurantRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RestaurantUseCases{
  constructor(private readonly restaurantRepository: IRestaurantRepository) {}
  async getRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantRepository.find({ loadEagerRelations: true });
  }
}