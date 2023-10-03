import { DomainError } from "../../@shared/errors";
import { MeetingStatus } from "../value-object/meetingStatus";

interface MeetingPropsInterface {
  id: string;
  leadId: string;
  date: Date;
  status: MeetingStatus;
}

export class Meeting {
  private _id: string;
  private _leadId: string;
  private _date: Date
  private _status: MeetingStatus

  constructor({ id, leadId, date, status }: MeetingPropsInterface) {
    this._date = date;
    this._id = id;
    this._leadId = leadId;
    this._status = status;

    this.validate()
  }

  private validate() {
    if(!this._id) throw new DomainError("Id is required.")
    if(!this._leadId) throw new DomainError("LeadId is required.")

    if(this._date < new Date()){
      throw new DomainError("Meeting date must be in future.")
    }

    if(!(this._status instanceof MeetingStatus)){
      throw new DomainError("Meeting status should be a instance of MeetingStatus.")
    }
  }

  get id(): string {
    return this._id;
  }

  get leadId(): string {
    return this._leadId;
  }

  get date(): Date {
    return this._date;
  }

  get status(): MeetingStatus {
    return this._status;
  }
}