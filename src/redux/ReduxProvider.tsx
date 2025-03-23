import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store} from "./store";
import { persistStore } from "redux-persist";

interface ReduxProviderProps {
  children: React.ReactNode;
}
const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  
  let reduxPersistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={reduxPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
