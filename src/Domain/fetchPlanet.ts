export function fetchPlanets<T>(
  decoder: (res: any) => T
): (signal: AbortSignal) => Promise<T> {
  return async (signal) =>
    fetch("https://swapi.dev/api/planets/?format=json", { signal })
      .then((res) => res.json())
      .then((response) => {
        const result = decoder(response.results);
        return result;
      });
}
