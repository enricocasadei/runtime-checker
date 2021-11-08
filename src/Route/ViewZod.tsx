import React from "react";
import { Planets } from "../Components/Planets";
import { planetsDecoder } from "../Domain/Zod/decoder-zod";
import { usePlanets } from "../Hooks/usePlanets";

export function ViewZod() {
  const state = usePlanets(planetsDecoder);

  return <Planets {...state} />;
}
