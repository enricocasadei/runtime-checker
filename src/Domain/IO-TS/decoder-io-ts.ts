import * as E from "fp-ts/lib/Either";
import * as t from "io-ts";
import { failure } from "io-ts/lib/PathReporter";
import { ParseError } from "../errors";
import { Planet, PlanetSchema } from "./Planets-io-ts";

export function planetsDecoder(data: Planet[]): Planet[] {
  return decoder(t.array(PlanetSchema), data);
}

export function decoder<T>(decoder: t.Decoder<unknown, T>, data: T): T {
  return E.match(
    (errors: t.Errors) => {
      throw new ParseError(`schema not valid, ${failure(errors).join("\n")}`);
    },
    // business logic
    (data: T) => data
  )(decoder.decode(data));
}
