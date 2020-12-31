import React, { useState, Context, createContext } from "react";

import SnackbarComponent from "./SnackbarComponent";

export interface State {
  snackbar: {
    type: "error" | "warning" | "success" | "info";
    message: string;
  };
}

export const SnackbarContext: Context<any> = createContext({
  snackbar: {},
  setSnackbar: () => {},
});

interface Props {
  children: JSX.Element[];
}

export const SnackbarProvider = (props: Props) => {
  const { children } = props;

  const [snackbar, setSnackbar] = useState<State>();

  return (
    <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
      <SnackbarComponent />

      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
