import React from "react";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { MotionConfig } from "framer-motion";

import store from "./redux/store";
import routes from "./config/RouterConfig";
import "./i18n";

const AppRoutes: React.FC = () => useRoutes(routes);

// `reducedMotion="user"` makes every framer-motion component honour the OS
// setting, including the `whileInView` reveals that never checked it locally.
const App: React.FC = () => (
  <Provider store={store}>
    <MotionConfig reducedMotion="user">
      <Router>
        <AppRoutes />
      </Router>
    </MotionConfig>
  </Provider>
);

export default App;
