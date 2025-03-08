import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="container mx-auto mt-20 space-y-10">
      <div>
        <p className="text-2xl font-bold text-center">
          {t("starterTemplate.technologies")}
        </p>
        <p className="text-sm text-muted-foreground text-center">
          {t("starterTemplate.description")}
        </p>
      </div>
      <div className="flex flex-col items-center gap-0">
        <p className="text-2xl text-center">{t("envExample.title")}</p>
        <pre className="text-xl text-muted-foreground">
          {t("envExample.content")}
        </pre>
      </div>
    </div>
  );
}
