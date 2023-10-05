import { inject, injectable } from "tsyringe";
import { LeadRepositoryInterface } from "../../../domain/lead/repository/lead-repository.interface";
import { Lead } from "../../../domain/lead/entity/lead.entity";
import { v4 } from "uuid";
import { LeadEmail } from "../../../domain/lead/value-object/leadEmail";

@injectable()
export class CreateLeadService {
  constructor(
    @inject("LeadRepository")
    private _leadRepository: LeadRepositoryInterface
  ){}

  public async execute(): Promise<Lead> {
    const lead = new Lead({ 
      id: v4(), 
      name: "Lead Test", 
      emails: new LeadEmail([
        {
          id: v4(),
          email: "test@email.com",
        },
        {
          id: v4(),
          email: "test2@email.com",
        }
      ]) 
    });

    await this._leadRepository.create(lead);

    return lead;
  }
}