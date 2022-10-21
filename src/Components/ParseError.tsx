import React from "react";
import { GenericError } from "../Domain/errors";

export function ParseError(props: { error: GenericError }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 20, width: 600 }}
    >
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ textAlign: "left", fontWeight: 600 }}>type</div>
          <code>{props.error.type}</code>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ textAlign: "left", fontWeight: 600 }}>name</div>
          <code>{props.error.name}</code>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ textAlign: "left", fontWeight: 600 }}>message</div>
          <code>{props.error.message}</code>
        </div>
      </div>
    </div>
  );
}
