import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = [
  "/protected",
  "/protected/dashboard",
  "/protected/profile",
  "/protected/settings",
  "/protected/admin",
  "/protected/reset-password",
];

const isProtectedRoute = (pathname: string): boolean => {
  const pathWithoutLocale = pathname.replace(/^\/(tr|en)/, "");
  console.log("pathWithoutLocale", pathWithoutLocale);

  return PROTECTED_ROUTES.some(
    (route) =>
      pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`)
  );
};

export const updateSession = async (
  request: NextRequest,
  initialResponse?: NextResponse
) => {
  // This `try/catch` block is only here for the interactive tutorial.
  // Feel free to remove once you have Supabase connected.
  try {
    // Eğer bir initialResponse varsa onu kullan, yoksa yeni bir response oluştur
    let response =
      initialResponse ||
      NextResponse.next({
        request: {
          headers: request.headers,
        },
      });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );

            // Eğer initialResponse yoksa yeni bir response oluştur
            if (!initialResponse) {
              response = NextResponse.next({
                request,
              });
            }

            // Her durumda, cookieleri response'a ekle
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // Oturumu güncelle - bu, kullanıcının giriş durumunu belirler
    await supabase.auth.getSession();

    const pathname = request.nextUrl.pathname;

    // Korumalı rotaları kontrol et - kullanıcı giriş yapmamışsa
    if (isProtectedRoute(pathname)) {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Kullanıcı giriş yapmamışsa, giriş sayfasına yönlendir
      if (!session) {
        // Mevcut locale'i bul (tr veya en)
        const locale = pathname.match(/^\/(tr|en)\//)
          ? pathname.split("/")[1]
          : "tr";
        // Kullanıcıyı giriş sayfasına yönlendir, mevcut locale'i koru
        const redirectUrl = new URL(`/${locale}/sign-in`, request.url);
        redirectUrl.searchParams.set(
          "redirectedFrom",
          request.nextUrl.pathname
        );
        return NextResponse.redirect(redirectUrl);
      }
    }

    return response;
  } catch (e) {
    // Hata durumunda, orijinal yanıtı veya boş bir yanıt döndür
    return (
      initialResponse ||
      NextResponse.next({
        request: {
          headers: request.headers,
        },
      })
    );
  }
};
