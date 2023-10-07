import { inject, injectable } from "tsyringe";
import { LeadRepositoryInterface } from "../../../domain/lead/repository/lead-repository.interface";
import { Lead } from "../../../domain/lead/entity/lead.entity";
import { v4 } from "uuid";
import { LeadEmail } from "../../../domain/lead/value-object/leadEmail";
import { LeadFactory } from "../../../domain/lead/factory/lead.factory";

@injectable()
export class CreateLeadService {
  constructor(
    @inject("LeadRepository")
    private _leadRepository: LeadRepositoryInterface
  ){}

  public async execute(): Promise<Lead> {
    const leadFactory = new LeadFactory();
    
    const lead = leadFactory.create({
      emails: ["new@email.com", "new1@email.com"],
      name: "newLead",
    })

    await this._leadRepository.create(lead);

    return lead;
  }
}