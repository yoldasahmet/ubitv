
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { store } from "../../src/state/store";

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as renderWithProvider };
