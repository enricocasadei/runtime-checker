import React from "react";
import { planetsDecoder } from "../Domain/IO-TS/decoder-io-ts";
import { usePlanets } from "../Hooks/usePlanets";
import { Planets } from "../Components/Planets";

export function ViewIots() {
  const state = usePlanets(planetsDecoder);

  return <Planets {...state} />;
}
