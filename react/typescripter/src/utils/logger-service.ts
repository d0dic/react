import { ErrorInfo } from 'react';

export type LogError = {
  error: Error
  info: ErrorInfo
}

function logger(logError: LogError) {
  console.warn(logError);
}

export default logger;
