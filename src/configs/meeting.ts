import { IMeetingStatus } from "../domain/meeting/types";

export const meetingStatus: Record<IMeetingStatus, IMeetingStatus> = {
  CREATED: "CREATED",
  FINISHED: "FINISHED",
  IN_PROGRESS: "IN_PROGRESS"
}