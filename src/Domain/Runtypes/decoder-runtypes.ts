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

  //throw new ParseError(`${result.code}: ${result.message.toString()}\n`);

  if ("details" in result) {
    throw new ParseError(
      `${result.code}: ${displayErrors(data, result.details)}\n`
    );
  }
  throw new ParseError(`${result.code}: ${result.message} - "${data}"`);
}

function displayErrors(data: any, details?: RT.Details): string {
  if (!details) return "";

  if (Array.isArray(details)) {
    return details.reduce((acc, obj) => {
      if (typeof obj === "string") {
        return (acc += obj);
      }
      return (acc += JSON.stringify(obj));
    }, "") as string;
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
