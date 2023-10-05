import { Lead } from "../../../domain/lead/entity/lead.entity";
import { LeadRepositoryInterface } from "../../../domain/lead/repository/lead-repository.interface";
import { LeadEmail } from "../../../domain/lead/value-object/leadEmail";
import { prismaClient } from "../../../infra/database/orm/prisma";

export class LeadRepository implements LeadRepositoryInterface {
  public async update(entity: Lead): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public async find(id: string): Promise<Lead | undefined> {
    const lead = await prismaClient.lead.findUnique({ where: { id }, include: { Email: true }});

    if(lead){
      return new Lead({
        id: lead.id,
        name: lead.name,
        emails: new LeadEmail(lead.Email),
      })
    }
  }

  public async create(entity: Lead): Promise<void> {
    const lead = await prismaClient.lead.create({
      data: {
        name: entity.name,
        id: entity.id,
      }
    })

    for(const email of entity.emails.toArray()){
      await prismaClient.email.create({
        data: {
          email,
          leadId: lead.id,
        }
      })
    }
  }
}