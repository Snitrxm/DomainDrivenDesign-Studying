import { Lead } from "../../../domain/lead/entity/lead.entity";
import { LeadRepositoryInterface } from "../../../domain/lead/repository/lead-repository.interface";
import { prismaClient } from "../../../infra/database/orm/prisma";

export class LeadRepository implements LeadRepositoryInterface {
  public async find(id: string): Promise<Lead | undefined> {
    const lead = await prismaClient.lead.findUnique({ where: { id }});

    if(lead){
      return new Lead({
        id: lead.id,
        name: lead.name
      })
    }
  }

  public async create(entity: Lead): Promise<void> {
    await prismaClient.lead.create({
      data: {
        name: entity.name,
        id: entity.id,
      }
    })
  }
}