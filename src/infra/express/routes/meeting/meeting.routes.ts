import { Router } from "express";
import { MeetingController } from "../../../../application/meeting/controllers/meeting.controller";

export const meetingRoutes = Router();

meetingRoutes.post("/", new MeetingController().create)