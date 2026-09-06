import React from "react";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import routes from "./config/RouterConfig";
import "./i18n";

const AppRoutes: React.FC = () => useRoutes(routes);

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
);

export default App;
