import { Injectable } from '@nestjs/common';

import { IRepository } from '../../infrastructure/database/repositories/IRepository';
import { Restaurant } from "../../domain/models/Restaurant";

@Injectable()
export abstract class IRestaurantRepository extends IRepository<Restaurant> {}
