import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { IRestaurantRepository } from '../../../application/ports/IRestaurantRepository';
import {Restaurant} from '../../../domain/models/Restaurant';
import { RestaurantEntity } from '../mapper/RestaurantEntity';
import { BaseRepository } from "./BaseRepository";

@Injectable()
export class RestaurantRepository extends BaseRepository<Restaurant>
  implements IRestaurantRepository {
  constructor(@InjectConnection() connection: Connection) {
    super(connection, RestaurantEntity);
  }
}
