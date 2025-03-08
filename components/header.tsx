import { Link } from "@/i18n/navigation";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default function Header() {
  return (
    <header className="flex justify-between items-center container mx-auto py-2">
      <h1>
        <Link href="/">LOGO</Link>
      </h1>
      <div className="flex items-center gap-2">
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
