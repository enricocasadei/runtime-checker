export async function fetchPlanets<T>(
  decoder: (res: unknown) => T
): Promise<T> {
  return fetch("https://swapi.dev/api/planets/?format=json")
    .then((res) => res.json())
    .then((response) => {
      const result = decoder(response.results);
      return result;
    });
}
