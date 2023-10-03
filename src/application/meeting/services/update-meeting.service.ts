import { inject, injectable } from "tsyringe";
import { MeetingRepositoryInterface } from "../../../domain/meeting/repository/meeting-repository.interface";
import { NotFoundError } from "../../@shared/errors";
import { IMeetingStatus } from "../../../domain/meeting/types";

interface RequestInterface {
  id: string;
  status?: IMeetingStatus
}

@injectable()
export class UpdateMeetingService {
  constructor(
    @inject("MeetingRepository")
    private _meetingRepository: MeetingRepositoryInterface,
  ){}

  public async execute(data: RequestInterface){
    const meeting = await this._meetingRepository.find(data.id)

    if(!meeting){
      throw new NotFoundError("Meeting not found.");
    }

    if(data.status){
      meeting.changeStatus(data.status)
    }

    await this._meetingRepository.update(meeting);
  }
}