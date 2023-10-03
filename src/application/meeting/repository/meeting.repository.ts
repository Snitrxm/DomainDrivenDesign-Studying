import { Meeting } from "../../../domain/meeting/entity/meeting.entity";
import { MeetingRepositoryInterface } from "../../../domain/meeting/repository/meeting-repository.interface";
import { MeetingStatus } from "../../../domain/meeting/value-object/meetingStatus";
import { prismaClient } from "../../../infra/database/orm/prisma";

export class MeetingRepository implements MeetingRepositoryInterface {
  public async update(entity: Meeting): Promise<void> {
    await prismaClient.meeting.update({ where: { id: entity.id }, data: {
      date: entity.date,
      id: entity.id,
      leadId: entity.leadId,
      status: entity.status.toString()
    }})
  }

  public async findBy(data: { where: keyof Meeting; value: string |number }): Promise<Meeting | undefined> {
    const whereClause: Record<string, string | number> = {};
    whereClause[data.where] = data.value;

    const meeting = await prismaClient.meeting.findFirst({ where: whereClause })

    if(meeting) {
      return new Meeting({
        date: meeting.date,
        id: meeting.id,
        leadId: meeting.leadId,
        status: new MeetingStatus(meeting.status)
      })
    }
  }

  public async find(id: string): Promise<Meeting | undefined> {
    const meeting = await prismaClient.meeting.findUnique({ where: { id } });

    if(meeting){
      return new Meeting({
        date: meeting.date,
        id: meeting.id,
        leadId: meeting.leadId,
        status: new MeetingStatus(meeting.status),
      })
    }
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