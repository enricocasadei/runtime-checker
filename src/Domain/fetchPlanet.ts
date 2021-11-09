export function fetchPlanets<T>(): (signal: AbortSignal) => Promise<T> {
  return async (signal) =>
    fetch("https://swapi.dev/api/planets/?format=json", { signal })
      .then((res) => res.json())
      .then((res) => res.results);
}
