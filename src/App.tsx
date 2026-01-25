import React from "react";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";

import store from "./redux/store";
import routes from "./config/RouterConfig";
import "./i18n";

import enUS from "antd/locale/en_US";
import hiIN from "antd/locale/hi_IN";

const AppRoutes: React.FC = () => {
  return useRoutes(routes);
};
const antdLocales: Record<string, any> = {
  en: enUS,
  hi: hiIN,
  gu: enUS,
};

const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Provider store={store}>
      <ConfigProvider locale={antdLocales[i18n.language] || enUS}>
        <Router>
          <AppRoutes />
        </Router>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
