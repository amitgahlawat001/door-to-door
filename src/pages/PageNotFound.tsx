import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

const PageNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="grain relative flex min-h-[78vh] items-center bg-deep">
      <div className="shell py-28 pt-36 text-center">
        <p className="font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none text-paper/10">
          404
        </p>
        <h2 className="-mt-6 font-display text-headline font-semibold text-paper">
          {t("notFound.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-paper/60">
          {t("notFound.body")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/">{t("notFound.home")}</Button>
          <Button to="/trackshipment" variant="ghost" className="text-paper">
            {t("cta.track")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
