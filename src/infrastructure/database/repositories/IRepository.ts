import { Injectable } from '@nestjs/common';
import {
  FindManyOptions,
} from 'typeorm';

@Injectable()
export abstract class IRepository<Entity> {
  abstract find(options?: FindManyOptions<Entity>): Promise<Entity[]>;
}
