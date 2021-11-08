import React from "react";
import { GenericError } from "../Domain/errors";

export function ParseError(props: { error: GenericError }) {
  return (
    <table>
      <thead>
        <th>type</th>
        <th>name</th>
        <th>message</th>
        <th>stack</th>
      </thead>
      <tbody>
        <tr>
          <td>{props.error.type}</td>
          <td>{props.error.name}</td>
          <td>{props.error.message}</td>
          <td>{props.error.stack}</td>
        </tr>
      </tbody>
    </table>
  );
}
