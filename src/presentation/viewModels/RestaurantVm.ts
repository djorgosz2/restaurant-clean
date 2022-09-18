import { Expose, plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {Restaurant} from "../../domain/models/Restaurant";

export class RestaurantVm {
  @Expose()
  @ApiProperty({
    description: 'The name of the restaurant',
  })
  name: string;
  @Expose()
  @ApiProperty({
    description: 'Room for this person when restaurant is empty',
  })
  capacity: string;

  @Expose()
  @ApiProperty({
    description: 'Address of the place.',
  })
  address: string;

  static toViewModel(restaurant: Restaurant): RestaurantVm {
    return plainToClass(RestaurantVm, restaurant, { excludeExtraneousValues: true });
  }
}
