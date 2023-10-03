import { DomainError } from "../../@shared/errors";
import { IMeetingStatus } from "../types";

export class MeetingStatus {
  public static CREATED = new MeetingStatus("CREATED");

  private _status: IMeetingStatus;

  constructor(status: IMeetingStatus){
    this._status = status;

    this.validate();
  }

  public validate(){
    const meetingStatusArray = ["CREATED", "IN_PROGESS", "FINISHED"];

    if(!meetingStatusArray.includes(this._status)){
      throw new DomainError(`Wrong meeting status. Got ${this._status} expect CREATED or IN_PROGESS or FINISHED.`)
    }
  }

  public toString(): IMeetingStatus {
    return this._status
  }
}