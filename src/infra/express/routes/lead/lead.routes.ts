import { Router } from "express";
import { LeadController } from "../../../../application/lead/controllers/lead.controller";

export const leadsRoutes = Router();

leadsRoutes.post("/", new LeadController().create);