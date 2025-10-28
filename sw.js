
const CACHE='piano-course-v1';
const ASSETS=[
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/app.js',
  './docs/Corso_Pianoforte_Akai_MPK_Mini_MKIV_aggiornato.pdf',
  // MIDI files
  './midi/01_note_test_C4_60bpm.mid',
  './midi/02_scala_C_maggiore_2ott_60bpm.mid',
  './midi/03_pattern_5_dita_RH_C_60bpm.mid',
  './midi/04_pattern_5_dita_LH_C_60bpm.mid',
  './midi/05_accordi_C_F_G_C_bloccati_70bpm.mid',
  './midi/06_accordi_C_F_G_C_arpeggio_90bpm.mid',
  './midi/07_scala_C_maggiore_ottavi_80bpm.mid',
  './midi/08_arpeggi_1-5-8-10_C-Am-F-G_90bpm.mid',
  './midi/09_backing_improv_C-Am-F-G_70bpm_16bars.mid',
  './midi/10_metronomo_4-4_80bpm_16bars.mid',
  './midi/11_cromatica_C4_C5_60bpm.mid'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
