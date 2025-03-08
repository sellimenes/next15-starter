# NightyNight - Çocuklar İçin Uyku Masalları

<p align="center">
 Ebeveynlerin çocuklarına okuyabileceği özel masallar üreten yapay zeka destekli web uygulaması
</p>

<p align="center">
  <a href="#özellikler"><strong>Özellikler</strong></a> ·
  <a href="#teknolojiler"><strong>Teknolojiler</strong></a> ·
  <a href="#kurulum"><strong>Kurulum</strong></a> ·
  <a href="#kullanım"><strong>Kullanım</strong></a>
</p>

## Özellikler

- 🔐 **Kullanıcı Kimlik Doğrulama**
  - Güvenli giriş ve kayıt sistemi
  - Supabase Auth entegrasyonu
- 🤖 **Yapay Zeka Entegrasyonu**
  - ChatGPT ile özelleştirilmiş masal üretimi
  - Yaş grubuna ve tercihlere göre içerik oluşturma
- 📚 **Masal Yönetimi**
  - Oluşturulan masalların 24 saat süreyle saklanması
  - Otomatik içerik temizleme sistemi
- 💳 **Kredi Sistemi**
  - Masal oluşturmak için kredi kullanımı
  - Kredi satın alma seçenekleri
- 📱 **Responsive Tasarım**
  - Mobil ve masaüstü uyumlu arayüz
  - Modern ve kullanıcı dostu deneyim

## Teknolojiler

- **Frontend**
  - Next.js 15
  - TypeScript
  - TailwindCSS
  - Shadcn/ui
- **Backend**
  - Supabase
  - OpenAI API
- **Deployment**
  - Vercel

## Kurulum

1. Repoyu klonlayın:

```bash
git clone https://github.com/sellimenes/nightynight2.git
cd nightynight
```

2. Bağımlılıkları yükleyin:

```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. `.env.local` dosyasını oluşturun:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

## Kullanım

1. Siteye giriş yapın veya yeni hesap oluşturun
2. Kredi satın alın
3. Yeni masal oluşturmak için tercihleri belirleyin
4. Oluşturulan masalı okuyun ve kaydedin

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
