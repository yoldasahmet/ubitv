import { ReactElement } from "react";
import AppRouter from "./navigation/AppRouter";
import AppProvider from "./provider/AppProvider";

const App = (): ReactElement => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
