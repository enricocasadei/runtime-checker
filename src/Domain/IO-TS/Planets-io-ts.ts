import * as t from "io-ts";

export const PlanetSchema = t.type({
  name: t.string,
  climate: t.string,
  diameter: t.string,
  gravity: t.string,
  created: t.string,
  edited: t.string,
  orbital_period: t.string,
  population: t.string,
  rotation_period: t.string,
  surface_water: t.string,
  terrain: t.string,
  url: t.string,
  films: t.array(t.string),
  residents: t.array(t.string),
});

export type Planet = t.TypeOf<typeof PlanetSchema>;
