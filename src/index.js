import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route } from "wouter";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ProfilePage from "./pages/profile";

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/profile/:id">
          {(params) => <ProfilePage id={params.id} />}
        </Route>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
