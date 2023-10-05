import { DomainError } from "../../@shared/errors";
import { LeadEmail } from "../value-object/leadEmail";

interface LeadPropsInterface {
  id: string;
  name: string;
  emails: LeadEmail;
}

export class Lead {
  private _id: string;
  private _name: string;
  private _emails: LeadEmail;

  constructor({ id, name, emails }: LeadPropsInterface){
    this._id = id;
    this._name = name;
    this._emails = emails;

    this.validate();
  }

  private validate(){
    if(!this._id) throw new DomainError("Id is required.");
    if(!this._name) throw new DomainError("Id is required.");

    if(!this._emails) throw new Error("Emails is required.");
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get emails(): LeadEmail {
    return this._emails;
  }
}