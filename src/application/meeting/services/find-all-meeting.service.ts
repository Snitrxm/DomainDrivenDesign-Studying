import { inject, injectable } from "tsyringe";
import { MeetingRepositoryInterface } from "../../../domain/meeting/repository/meeting-repository.interface";

interface ResponseInterface {
  id: string;
  leadId: string;
  date: Date;
  status: string;
}

@injectable()
export class FindAllMeetingService {
  constructor(
    @inject("MeetingRepository")
    private _meetingRepository: MeetingRepositoryInterface,
  ){}

  public async execute(): Promise<ResponseInterface[]> {
    const meetings = await this._meetingRepository.findAll();

    const response = meetings.map(meeting => {
      return {
        id: meeting.id,
        leadId: meeting.leadId,
        status: meeting.status.toString(),
        date: meeting.date
      } as ResponseInterface
    })

    return response;
  }
}