import { DomainError } from "../../@shared/errors";

interface LeadPropsInterface {
  id: string;
  name: string;
}

export class Lead {
  private _id: string;
  private _name: string;

  constructor({ id, name }: LeadPropsInterface){
    this._id = id;
    this._name = name;

    this.validate();
  }

  private validate(){
    if(!this._id) throw new DomainError("Id is required.")
    if(!this._name) throw new DomainError("Id is required.")
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}