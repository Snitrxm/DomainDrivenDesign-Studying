import { container } from "tsyringe";
import { LeadRepositoryInterface } from "../../domain/lead/repository/lead-repository.interface";
import { LeadRepository } from "../../application/lead/repository/lead.repository";
import { MeetingRepositoryInterface } from "../../domain/meeting/repository/meeting-repository.interface";
import { MeetingRepository } from "../../application/meeting/repository/meeting.repository";

container.registerSingleton<LeadRepositoryInterface>("LeadRepository", LeadRepository);
container.registerSingleton<MeetingRepositoryInterface>("MeetingRepository", MeetingRepository);
