import { useEffect, useRef, useState } from "react";
import { fetchPlanets } from "../Domain/fetchPlanet";

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
  const controller = useRef<AbortController>(new AbortController());
  const [loading, setLoading] = useState<boolean>();
  const [planets, setPlanets] = useState<Planet[]>();
  useEffect(() => {
    setLoading(true);
    fetchPlanets<Planet[]>(decoder)(controller.current.signal)
      .then(setPlanets)
      .finally(() => {
        setLoading(false);
      });
    const ctrl = controller.current;
    return () => ctrl.abort();
  }, []);

  return { planets, loading };
}
