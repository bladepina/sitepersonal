// posts.js — aggiungi i tuoi pensieri qui

const POSTS = [
  {
    id: 1,
    date: "2026-04-09",
    tags: ["random"],
    title: "Inizio.",
    excerpt: "Non so ancora cosa sarà questo posto. Ma avevo bisogno di un posto mio.",
    body: `<p>Inizio senza sapere dove arrivo. Non è un blog nel senso classico. Non è un diario. È qualcosa di mezzo.</p>
<p>Un posto dove buttare giù quello che ho in testa, senza filtri, senza algoritmi che decidono cosa vale la pena dire.</p>
<p>Forse non lo leggerà nessuno. Va bene così.</p>`
  },
  {
    id: 2,
    date: "2026-04-09",
    tags: ["tech", "ai"],
    title: "Viviamo in un momento assurdo",
    excerpt: "Ogni settimana esce qualcosa che avrebbe fatto notizia per mesi, tre anni fa.",
    body: `<p>Come architetto e devops, vedo il cambiamento dall'interno. I tool cambiano, le pipeline si riscrivono, i pattern si evolvono — ma la cadenza adesso è qualcosa di diverso.</p>
<p>Non è solo che l'AI scrive codice. È che cambia il modo in cui ragiono sui problemi. Mi ritrovo a delegare pattern ripetitivi e a concentrarmi sulle decisioni di alto livello. Il mestiere si sposta.</p>
<p>Non so se fa paura o entusiasmo. Probabilmente entrambi, e va bene così.</p>`
  },
  {
    id: 3,
    date: "2026-04-09",
    tags: ["fishing", "random"],
    title: "Un'alba sul lago vale più di mille meeting",
    excerpt: "Il silenzio dell'acqua alle sei di mattina è una cosa che non si spiega, si vive.",
    body: `<p>C'è qualcosa nel sistemarsi con la canna in mano e aspettare. Nessuna notifica. Nessun ticket aperto. Solo l'acqua che si muove appena.</p>
<p>La pesca mi ha insegnato una cosa che il lavoro in tech spesso dimentica: non tutto si ottimizza. Alcune cose richiedono solo tempo e presenza.</p>
<blockquote>Se il pesce non abbocca, stai ancora vincendo — sei fuori.</blockquote>`
  },
  {
    id: 4,
    date: "2026-04-09",
    tags: ["gaming", "random"],
    title: "I videogiochi come architettura",
    excerpt: "Ogni open world è un sistema distribuito. Ogni build è un'opinionated architecture decision.",
    body: `<p>Stavo giocando l'altra sera e mi sono ritrovato a pensare a quanto il design di un videogioco assomigli al design di un sistema software.</p>
<p>I sistemi di spawn, i trigger, la gestione degli stati — è tutto lì. Solo che nessuno lo chiama <code>event-driven</code>, lo chiamano gameplay.</p>
<p>Forse i migliori game designer sono architetti che non lo sanno.</p>`
  },
  {
    id: 5,
    date: "2026-04-09",
    tags: ["animals", "random"],
    title: "Gli animali hanno ragione",
    excerpt: "Nessun animale si stressa per il retrospective del lunedì.",
    body: `<p>Osservo spesso gli animali — quelli che ho intorno, quelli che incrocio. C'è una qualità nella loro presenza che io trovo difficile da raggiungere.</p>
<p>Sono completamente lì. Nessun pensiero sul meeting di domani. Nessun context-switch.</p>
<p>Forse è la cosa più umana che ho imparato da loro: stare dove sei.</p>`
  }
];
