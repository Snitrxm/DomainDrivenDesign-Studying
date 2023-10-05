import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMeetingService } from "../services/create-meeting.service";
import { UpdateMeetingService } from "../services/update-meeting.service";
import { FindAllMeetingService } from "../services/find-all-meeting.service";

export class MeetingController {
  public async create(req: Request, res: Response){
    const { leadId, date } = req.body;

    const meeting = await container.resolve(CreateMeetingService).execute({
      date,
      leadId,
    })

    return res.status(201).json(meeting);
  }

  public async update(req: Request, res: Response){
    const data = req.body;

    const meeting = await container.resolve(UpdateMeetingService).execute({ ...data })

    return res.status(201).json(meeting);
  }

  public async findAll(req: Request, res: Response){
    const meetings = await container.resolve(FindAllMeetingService).execute()

    return res.status(201).json(meetings);
  }
}