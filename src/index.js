import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n";
import "./assets/styles/main.scss";
import { AuthProvider } from "contexts/auth";
import App from "./App";

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
