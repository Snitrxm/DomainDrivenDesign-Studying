import { BaseRepositoryInterface } from "../../@shared/repository/base-repository.inteface";
import { Meeting } from "../entity/meeting.entity";

export interface MeetingRepositoryInterface extends BaseRepositoryInterface<Meeting> {}