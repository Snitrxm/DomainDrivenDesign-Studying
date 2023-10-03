import { container } from "tsyringe";
import { CreateLeadService } from "../services/create-lead.service";
import { Request, Response } from "express";

export class LeadController {
  public async create(req: Request, res: Response){
    const lead = await container.resolve(CreateLeadService).execute();

    return res.status(201).json(lead);
  }
}