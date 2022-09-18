import { Connection, EntityManager, EntitySchema, FindManyOptions, ObjectLiteral, QueryRunner } from "typeorm";

export class BaseRepository<Entity extends ObjectLiteral> {
  readonly manager: EntityManager;
  readonly queryRunner?: QueryRunner;
  readonly entitySchema: EntitySchema<Entity>;

  constructor(connection: Connection, entity: EntitySchema<Entity>) {
    this.queryRunner = connection.createQueryRunner();
    this.manager = this.queryRunner.manager;
    this.entitySchema = entity;
  }
  find(
    optionsOrConditions?: FindManyOptions<Entity>,
  ): Promise<Entity[]> {
    return this.manager.find(
      this.entitySchema as any,
      optionsOrConditions as any,
    );
  }
}