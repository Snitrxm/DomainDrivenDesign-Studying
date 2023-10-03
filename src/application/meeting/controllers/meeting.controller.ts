import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMeetingService } from "../services/create-meeting.service";

export class MeetingController {
  public async create(req: Request, res: Response){
    const { leadId, date } = req.body;

    const meeting = await container.resolve(CreateMeetingService).execute({
      date,
      leadId,
    })

    return res.status(201).json(meeting);
  }
}