import { InfoIcon } from "lucide-react";

export function SmtpMessage() {
  return (
    <div className="bg-muted/50 text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center mt-4">
      <InfoIcon size="16" strokeWidth={2} />
      <span>
        Configure SMTP settings to enable password reset emails.
      </span>
    </div>
  );
}
