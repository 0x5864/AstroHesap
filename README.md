# AstroHesap

AstroHesap, yerelde calisan cok sayfali bir astroloji arayuzudur.

Bu surumda sunlar var:

- Sabit ust bar
- Arama kutusu
- Astroloji arac kartlari
- Kisa on izleme panelleri
- Dogum Haritasi ekrani
- Dogum Haritasi1 ekrani
- Vedik/Sideral Astroloji ekrani
- Efemeris Tablolari ekrani
- Yukselen Burc ekrani
- Ay Takvimi ekrani
- Kayar burc ikon bandi

## Dosyalar

- `index.html`: Ana sayfa
- `styles.css`: Gorunum ve duzen
- `app.js`: Kart arama davranisi
- `astro-tools.js`: Form ekranlari ve hesap mantigi
- `server.mjs`: Yerel sunucu
- `assets/`: Logo ve burc ikonlari

## Nasil acilir

Sunucuyu baslat:

```bash
node server.mjs
```

Tarayicida ac:

```text
http://127.0.0.1:8011/index.html
```

`8010` portu baska bir proje tarafindan kullaniliyorsa, `AstroHesap` varsayilan olarak `8011` portunda acilir.

Istersen portu elle de verebilirsin:

```bash
PORT=8012 node server.mjs
```

## Sayfalar

- `index.html`
- `dogum-haritasi.html`
- `dogum-haritasi1.html`
- `vedik-sideral-astroloji.html`
- `efemeris-tablolari.html`
- `yukselen-burc.html`
- `ay-takvimi.html`
