import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../state/store";

const AppProvider = (props: any): any => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{props.children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
});

export default AppProvider;
