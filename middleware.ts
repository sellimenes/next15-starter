import { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// next-intl middleware'ini oluştur
const intlMiddleware = createMiddleware(routing);

// Kombine middleware fonksiyonu
export async function middleware(request: NextRequest) {
  // İlk olarak next-intl middleware'ini çalıştır
  const response = await intlMiddleware(request);

  // Her durumda Supabase middleware'ini çalıştır ve intlResponse'u aktar
  return await updateSession(request, response);
}

// Matcher'ları birleştir
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    // next-intl için matcher'lar
    "/",
    "/(tr|en)/:path*",
  ],
};
