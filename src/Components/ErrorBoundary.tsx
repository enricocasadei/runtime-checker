import React from "react";
import { GenericError } from "../Domain/errors";
import { BaseError } from "./BaseError";
import { ParseError } from "./ParseError";

interface ErrorBoundaryState {
  hasError: boolean;
  error: GenericError | null;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: GenericError): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render(): React.ReactNode {
    const hasError = this.state.hasError;
    const error = this.state.error;
    if (hasError) {
      if (error?.type === "ParseError") {
        return <ParseError error={error} />;
      }

      return <BaseError />;
    }

    return this.props.children;
  }
}
