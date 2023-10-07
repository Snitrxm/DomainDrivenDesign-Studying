import { DomainError } from "../../@shared/errors";

export interface LeadEmailRequestInterface {
  id: string;
  email: string;
}

export class LeadEmail {
  private _emails: string[] = [];

  constructor(emails: LeadEmailRequestInterface[]){
    this._emails = emails.map(item => item.email);

    this.validate();
  }

  private validate(){
    if(this._emails.length < 1) throw new DomainError("Email is required.")

    for(const email of this._emails){
      if(!email.includes("@")) throw new DomainError("Valid email is required.")
    }
  }

  public toArray(): string[] {
    return this._emails;
  }
}