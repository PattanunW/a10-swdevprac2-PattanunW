"use client"

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store} from "./store";
import { persistStore } from "redux-persist";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  let reduxPersistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={reduxPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

