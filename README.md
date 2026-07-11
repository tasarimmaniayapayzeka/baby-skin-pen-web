# Baby Skin Pen — Tanıtım Sitesi

**MediEst Group** markası **Baby Skin Pen** cilt bakım cihazının tek sayfalık tanıtım sitesi.

> ⚠️ Bu proje EsteTouch / Kalissa / Dentakim / AI Asistan projelerinden **tamamen ayrıdır**.

## Çalıştırma

```bash
node server.js
# http://localhost:7799
```

Statik site (HTML/CSS/JS) — herhangi bir hosting'e (cPanel dahil) klasörü yükleyerek yayınlanabilir; `server.js` ve `README.md` yüklenmeyebilir.

## İçerik kaynakları

1. **PDF sunum:** `Downloads\Baby skin pen sunum _ Mediest .pdf` (ilk sürüm içerik + RGBA görsel çıkarımı)
2. **Resmi docx metinleri:** `Desktop\Önemli\Gülşah Son 2026\Gülşah Malzemeler\01 Baby Skin Pen Malzemeler\` — "Baby Skin Pen Nedir", "Katalog Açıklaması", "Kısa E-Ticaret Açıklaması", "Anlatım", "Bilgi" (protokol 4-6 seans / **15-20 gün**, fiyat **1.750₺/kutu**, ilk alımda 7 kutu hediye)
3. **Onaylı logo:** `001 Baby Skin Logo\Baby Skin PEN-Logo-Onay.pdf` → pdf.js ile şeffaf PNG'ye çevrildi (`logo-acik.png` beyaz zemin için, `logo-koyu.png` lacivert zemin için). Marka renkleri: mavi `#82a3d8`, lacivert `#232e3f`
4. **Stüdyo çekimleri:** `01 Baby Skin Pen Stüdyon Çekim.zip` → 19 seçilmiş kare tarayıcı canvas ile 1100px'e küçültüldü (`assets/img/studio/`)
5. **Video:** logosuz kapsül b-roll (`assets/video/kapsul-tanitim.mp4`, ~20MB)

## Yapı

- `index.html` — tek sayfa: hero, teknoloji+faydalar, 7 LED ışık, 7 kapsül serisi (fiyat+kampanya), profesyonel set, video, 2 adımlı uygulama, eğitim & bayilik, iletişim
- `assets/css/style.css` — marka mavisi + lacivert + altın tema, responsive
- `assets/js/main.js` — mobil menü, scroll-reveal, kapsül kartı çevirme
- `assets/img/` — PDF çıkarımları (şeffaf PNG'ler) + `studio/` stüdyo kareleri + logolar

## Kullanılmayan malzemeler (ileride değerlendirilebilir)

- Büyük tanıtım videoları: `BABY_SKİN PEN-Logolu.mp4` (131MB), `Baby Skin Pen TANITIM_1_1.mp4` (477MB) — web için sıkıştırma gerekir (ffmpeg yok)
- `02 Baby Skin Tasarımlar.rar`, `05 Kurum Videoları.rar` — unrar aracı olmadığından açılamadı
- Kapsül başına tanıtım kartları (Baby-4..10.jpg), LED posterleri (Baby-11..17.jpg), kutu kartları (Baby-18..24.jpg)
