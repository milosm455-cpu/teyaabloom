# Teya a Bloom — sajt (statičan HTML)

Folder je spreman za objavljivanje. Ceo sadržaj je u `index.html`; nema build koraka.

## Fajlovi
- `index.html` — stranica sa SEO meta tagovima i strukturiranim podacima (NailSalon)
- `style.css`, `script.js` — stilovi, animacije, dnevna/noćna tema, nagib loga
- `img/` — logo, fotografija i galerija
- `robots.txt`, `sitemap.xml` — za Google

## Objavljivanje na GitHub Pages
1. Napravi novi repozitorijum na github.com (npr. `teyaabloom`), javni.
2. Otpremi SADRŽAJ ovog foldera u koren repozitorijuma (Add file → Upload files) — `index.html` mora biti u korenu, zajedno sa `.nojekyll`.
3. Settings → Pages → Source: „Deploy from a branch", Branch: `main`, folder `/ (root)` → Save.
4. Za minut-dva sajt je na `https://<korisnik>.github.io/teyaabloom/`.
5. Sopstveni domen: Settings → Pages → Custom domain (GitHub sam pravi `CNAME` fajl), pa kod registra domena dodaj DNS zapise koje GitHub navede.

## Pre objavljivanja
1. Ako domen nije `teyaabloom.rs`, zameni `https://teyaabloom.rs` u `index.html`, `robots.txt` i `sitemap.xml`.
2. Ako koristiš samo github.io adresu (bez domena), u tačci 1 upiši tu adresu.
3. Preporuka: konvertuj slike u WebP (manje i brže učitavanje).

## Google
1. **Google Search Console** — dodaj domen, potvrdi vlasništvo, pošalji `sitemap.xml`.
2. **Google Business Profile** — otvori profil studija (adresa, telefon, Instagram, fotografije). Najvažnije za pretrage „nokti Leskovac".
3. Proveri strukturirane podatke: https://search.google.com/test/rich-results
