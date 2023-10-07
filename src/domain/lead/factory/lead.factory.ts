import { v4 } from "uuid";
import { Lead } from "../entity/lead.entity";
import { LeadEmail, LeadEmailRequestInterface } from "../value-object/leadEmail";
import { CreateLeadFactoryInterface } from "./types/lead-factory.types";

export class LeadFactory {
  public create({ name, emails }: CreateLeadFactoryInterface): Lead {
    const leadEmails: LeadEmailRequestInterface[] = []

    emails.forEach(email => {
      leadEmails.push({ id: v4(), email })
    })

    const lead = new Lead({ 
      id: v4(), 
      name, 
      emails: new LeadEmail([
        ...leadEmails
      ]) 
    });

    return lead;
  }
}