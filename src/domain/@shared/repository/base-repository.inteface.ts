export interface BaseRepositoryInterface<Entity> {
  create(entity: Entity): Promise<void>;
  find(id: string): Promise<Entity | undefined>;
  update(entity: Entity): Promise<void>;
}