import React, { ComponentState, ErrorInfo, ReactNode } from 'react';
import logErrorToMyService, { LogError } from '../utils/logger-service';

class ErrorBoundary extends React.Component {
  constructor(props: { children?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logErrorToMyService({ error, info } as LogError);
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    const { hasError }: ComponentState = this.state;
    const { children }: { children?: ReactNode } = this.props;

    if (hasError) {
      return (
        <div style={{ padding: 30 }}>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return children || null;
  }
}

export default ErrorBoundary;
