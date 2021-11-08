export class GenericError extends Error {
  readonly type: string = "GenericError";
  message = "An unexpected error occurred";

  constructor(message?: string) {
    super(message);
    if (message) this.message = message;
  }

  static fromError(error: GenericError): GenericError {
    switch (error.type) {
      case "ParseError":
        return new ParseError(error.message);
      default:
        return new UnexpectedError(error.message);
    }
  }
}

export class UnexpectedError extends GenericError {
  type = "UnexpectedError";
}

export class ParseError extends GenericError {
  type = "ParseError";
}
