import * as z from "zod";

export const PlanetSchema = z.object({
  name: z.string(),
  climate: z.string(),
  diameter: z.string(),
  gravity: z.string(),
  created: z.string(),
  edited: z.string(),
  orbital_period: z.string(),
  population: z.string(),
  rotation_period: z.string(),
  surface_water: z.string(),
  terrain: z.string(),
  url: z.string(),
  films: z.array(z.string()),
  residents: z.array(z.string()),
});

export type Planet = z.infer<typeof PlanetSchema>;
