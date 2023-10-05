import { Router } from "express";
import { MeetingController } from "../../../../application/meeting/controllers/meeting.controller";

export const meetingRoutes = Router();

meetingRoutes.post("/", new MeetingController().create);
meetingRoutes.patch("/", new MeetingController().update);
meetingRoutes.get("/", new MeetingController().findAll);