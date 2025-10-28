
# Corso Online · Pianoforte con Akai MPK Mini MKIV

Sito statico pronto per pubblicazione su **GitHub Pages** o **Netlify**.

## Struttura
- `index.html` – pagina principale del corso
- `assets/` – CSS & JS (progressi su localStorage, Service Worker per offline)
- `midi/` – tutti i file MIDI degli esercizi
- `docs/` – PDF aggiornato del corso
- `sw.js` – service worker per cache offline

## Pubblicazione

### Opzione A · GitHub Pages
1. Crea un nuovo repository su GitHub (pubblico), es. `piano-corso`.
2. Carica tutti i file di questa cartella nella root del repo (o `docs/`).
3. Vai su **Settings → Pages** e seleziona:
   - **Branch**: `main` (o `master`)
   - **Folder**: `/ (root)` oppure `docs/` se usi quella.
4. Salva. Dopo pochi minuti il sito sarà disponibile a un URL del tipo:
   `https://TUO-UTENTE.github.io/piano-corso/`

### Opzione B · Netlify
1. Vai su https://app.netlify.com/ e **New site from Git** (oppure drag&drop la cartella).
2. Build command: *(vuoto)* – Publish directory: **/**
3. Deploy. Avrai un URL del tipo `https://nome-scelto.netlify.app`.

> **Nota su MIDI in browser:** la riproduzione dei `.mid` può non essere supportata nativamente. I file sono forniti per **download** e uso in DAW. Il sito offre **cache offline** dei file via Service Worker.

## Personalizzazione
- Modifica testi in `index.html`.
- Aggiungi altri MIDI in `midi/` e linkali nelle sezioni.
- Colori e stile: `assets/css/style.css`.

Buon studio! 🎹
