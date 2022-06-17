import Dashboard from './Dashboard';

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";



function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Dashboard />
    </PersistGate>
</Provider>
  );
}

export default App;
