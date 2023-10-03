import { Lead } from "../../../domain/lead/entity/lead.entity";
import { Meeting } from "../../../domain/meeting/entity/meeting.entity";
import { MeetingRepositoryInterface } from "../../../domain/meeting/repository/meeting-repository.interface";
import { prismaClient } from "../../../infra/database/orm/prisma";

export class MeetingRepository implements MeetingRepositoryInterface {
  public async find(id: string): Promise<Lead | undefined> {
    throw new Error("Method not implemented.");
  }

  public async create(entity: Meeting): Promise<void> {
    await prismaClient.meeting.create({ 
      data: {
        id: entity.id,
        date: entity.date,
        leadId: entity.leadId,
        status: entity.status.toString(),
      }
    })
  }
}