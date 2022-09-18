import { EntitySchema } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Restaurant } from "../../../domain/models/Restaurant";

export const RestaurantEntity = new EntitySchema<Restaurant>({
  name: 'Restaurant',
  tableName: 'Restaurant',
  target: Restaurant,
  columns: {
    ...BaseEntity,
    name: {
      type: String,
      length: 100,
    },
    address: {
      type: String,
      length: 100,
    },
    capacity: {
      type: Number,
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
