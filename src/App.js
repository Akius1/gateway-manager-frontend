import Dashboard from './Dashboard';
import { theme } from './style/style';
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <Dashboard />

    </ThemeProvider>
    </PersistGate>
</Provider>
  );
}

export default App;
