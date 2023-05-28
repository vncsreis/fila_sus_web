/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { PropsWithChildren, useState } from "react";

interface ErrorContextProps {
  error: boolean;
  setError: (_err: boolean) => void;
}

export const ErrorContext = React.createContext<ErrorContextProps>({
  error: false,
  setError: (_err: boolean) => { },
});

export function ErrorProvider({ children }: PropsWithChildren) {
  const [error, setError] = useState(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}
