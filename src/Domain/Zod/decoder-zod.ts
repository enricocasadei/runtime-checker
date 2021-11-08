import * as z from "zod";
import { ParseError } from "../errors";
import { Planet, PlanetSchema } from "./Planets-zod";

export function planetsDecoder(data: Planet[]): Planet[] {
  return decoder(z.array(PlanetSchema), data);
}

/* 
ZodError {
  issues: [{
    "code": "custom",
    "path": [ "confirm" ],
    "message": "Passwords don't match"
  }]
}
 */
export function decoder<T>(schema: z.ZodTypeAny, data: T): T {
  const result = schema.safeParse(data);

  if (result.success) {
    return result.data as T;
  }

  throw new ParseError(`${result.error.name}: ${result.error.toString()}\n`);

  //throw new ParseError(`${result.error.name}: ${result.message} - "${data}"`);
}

/* // this is type 'any' because the data is failing the tests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function displayErrors(data: any, details?: z.Details): string {
  if (!details) return "";

  if (Array.isArray(details)) {
    return details.join(" - ");
  }

  return Object.entries(details).reduce((acc, [key, value]) => {
    const receivedValue = JSON.stringify(data[key]);
    const valueToDisplay =
      typeof value === "string" ? value : JSON.stringify(value);
    return (acc += `\n${key} is wrong: \n${valueToDisplay}${
      receivedValue ? `\nreceived value: ${receivedValue}\n` : ""
    }`);
  }, "");
} */
