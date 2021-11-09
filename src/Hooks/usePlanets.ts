import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPlanets } from "../Domain/fetchPlanet";
import { PlanetsServer } from "../PlanetsServer";

type Planet = {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  created: string;
  edited: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  films: string[];
  residents: string[];
};

export function usePlanets(decoder: (data: any) => Planet[]) {
  const { mock } = useParams<{ mock?: string }>();
  const controller = new AbortController();
  const [loading, setLoading] = useState<boolean>();
  const [planets, setPlanets] = useState<Planet[]>();
  useEffect(() => {
    const ctrl = controller;
    let server: undefined | { shutdown(): void };
    if (mock === "mock") {
      server = PlanetsServer();
    }

    setLoading(true);
    fetchPlanets<Planet[]>()(controller.signal)
      .then(setPlanets)
      .finally(() => {
        setLoading(false);
      });

    return () => {
      ctrl.abort();
      if (server) {
        server.shutdown();
      }
    };
  }, [mock]);

  if (planets) {
    const actualPlanets = decoder(planets);
    return { planets: actualPlanets };
  }

  return { planets, loading };
}
