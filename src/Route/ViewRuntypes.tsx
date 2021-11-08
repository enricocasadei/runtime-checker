import React from "react";
import { Planets } from "../Components/Planets";
import { planetsDecoder } from "../Domain/Runtypes/decoder-runtypes";
import { usePlanets } from "../Hooks/usePlanets";

export function ViewRuntypes() {
  const state = usePlanets(planetsDecoder);

  return <Planets {...state} />;
}
