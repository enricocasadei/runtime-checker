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
}
