import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import fetchPreferredLanguage from "./i18n/api/languageCheck.api";

const App = () => {
  const { t, ready } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (ready)
      fetchPreferredLanguage().then((lang) => i18n.changeLanguage(lang));
  }, [ready, i18n]);

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default App;
