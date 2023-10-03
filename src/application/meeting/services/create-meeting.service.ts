import { inject, injectable } from "tsyringe";
import { MeetingRepositoryInterface } from "../../../domain/meeting/repository/meeting-repository.interface";
import { LeadRepositoryInterface } from "../../../domain/lead/repository/lead-repository.interface";
import { Meeting } from "../../../domain/meeting/entity/meeting.entity";
import { v4 } from "uuid";
import { MeetingStatus } from "../../../domain/meeting/value-object/meetingStatus";
import { IMeetingStatus } from "../../../domain/meeting/types";

interface RequestInterface {
  leadId: string;
  date: Date;
}

interface ResponseInterface {
  id: string;
  date: Date;
  leadId: string;
  status: IMeetingStatus
}

@injectable()
export class CreateMeetingService {
  constructor(
    @inject("MeetingRepository")
    private _meetingRepository: MeetingRepositoryInterface,
    @inject("LeadRepository")
    private _leadRepository: LeadRepositoryInterface
  ){}

  public async execute(data: RequestInterface): Promise<ResponseInterface> {
    const lead = await this._leadRepository.find(data.leadId);

    if(!lead){
      throw new Error("Lead not found.")
    }

    const meeting = new Meeting({
      date: data.date,
      id: v4(),
      leadId: data.leadId,
      status: MeetingStatus.CREATED
    });

    await this._meetingRepository.create(meeting);

    return {
      date: meeting.date,
      id: meeting.id,
      leadId: meeting.leadId,
      status: meeting.status.toString(),
    };
  }
}