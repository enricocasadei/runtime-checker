import * as RT from "runtypes";

export const PlanetSchema = RT.Record({
  name: RT.String,
  climate: RT.String,
  diameter: RT.String,
  gravity: RT.String,
  created: RT.String,
  edited: RT.String,
  orbital_period: RT.String,
  population: RT.String,
  rotation_period: RT.String,
  surface_water: RT.String,
  terrain: RT.String,
  url: RT.String,
  films: RT.Array(RT.String),
  residents: RT.Array(RT.String),
  property: RT.Record({
    property2: RT.String,
  }).optional(),
});

export type Planet = RT.Static<typeof PlanetSchema>;
