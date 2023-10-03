export class AlreadyExistError extends Error {
  public _type;
  public _status;

  constructor(message: string) {
    super(message)
    
    this._status = 500;
    this._type = "ALREADY_EXIST_ERROR";
    this.name = "AlreadyExistError";
  }
}

export class NotFoundError extends Error {
  public _type;
  public _status;

  constructor(message: string) {
    super(message)
    
    this._status = 500;
    this._type = "NOT_FOUND_ERROR";
    this.name = "NotFoundError";
  }
}