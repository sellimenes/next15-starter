import React from "react";
import { useTranslations } from "next-intl";

type Props = {};

const Footer = (props: Props) => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-background py-4 border-t border-border">
      <p className="text-sm text-muted-foreground text-center">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
};

export default Footer;
