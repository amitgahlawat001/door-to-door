import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./config/RouterConfig";

const AppRoutes: React.FC = () => {
  return useRoutes(routes);
};

const App: React.FC = () => (
  <Provider store={store}>
    <Router basename="/door-to-door">
      <AppRoutes />
    </Router>
  </Provider>
);

export default App;
