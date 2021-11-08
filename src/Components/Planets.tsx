import React from "react";

export function Planets<T extends { name: string }>(props: {
  planets?: T[];
  loading?: boolean;
}) {
  return (
    <div>
      {props.loading === true ? (
        <div>loading planets</div>
      ) : (
        <ul>
          {props.planets?.map((planet) => (
            <li key={planet.name}>{planet.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
