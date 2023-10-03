import { Lead } from "../../lead/entity/lead.entity";

export interface BaseRepositoryInterface<Entity> {
  create(entity: Entity): Promise<void>;
  find(id: string): Promise<Lead | undefined>;
}