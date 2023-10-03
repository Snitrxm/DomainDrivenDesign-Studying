import express from "express";
import "reflect-metadata";
import "../containers/index";
import "express-async-errors";
import { leadsRoutes } from "./routes/lead/lead.routes";
import { meetingRoutes } from "./routes/meeting/meeting.routes";

const app = express();
app.use(express.json());

app.use("/leads", leadsRoutes);
app.use("/meetings", meetingRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));