import * as RT from "runtypes";
import { ParseError } from "../errors";
import { Planet, PlanetSchema } from "./Planets-runtypes";

export function planetsDecoder(data: Planet[]): Planet[] {
  return decoder(RT.Array(PlanetSchema), data);
}

export function decoder<T>(schema: RT.Runtype, data: T): T {
  const result = schema.validate(data);

  if (result.success) {
    return result.value as T;
  }

  if ("details" in result) {
    throw new ParseError(
      `${result.code}: ${displayErrors(data, result.details)}\n`
    );
  }
  throw new ParseError(`${result.code}: ${result.message} - "${data}"`);
}

// this is type 'any' because the data is failing the tests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function displayErrors(data: any, details?: RT.Details): string {
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
}
