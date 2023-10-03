export class DomainError extends Error {
  public _type;
  public _status;

  constructor(message: string) {
    super(message)
    
    this._status = 500;
    this._type = "DOMAIN_ERROR";
    this.name = "DomainError";
  }
}