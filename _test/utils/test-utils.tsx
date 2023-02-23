// import {NavigationContainer} from '@react-navigation/native';
// import {render} from '@testing-library/react-native';
// import {NativeBaseProvider} from 'native-base';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// // must have for native base ui
// const inset = {
//   frame: {x: 0, y: 0, width: 0, height: 0},
//   insets: {top: 0, left: 0, right: 0, bottom: 0},
// };

// const AllTheProviders = ({children}): JSX.Element => {
//   return (
//     <NativeBaseProvider initialWindowMetrics={inset}>
//       <NavigationContainer>{children}</NavigationContainer>
//     </NativeBaseProvider>
//   );
// };

// const customRender = (ui, options?: any) =>
//   render(ui, {wrapper: AllTheProviders, ...(options || {})});

// export * from '@testing-library/react-native';

// export {customRender as render};

// export const useNavigationMock = useNavigation as jest.MockedFunction<
//   typeof useNavigation
// >;

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
