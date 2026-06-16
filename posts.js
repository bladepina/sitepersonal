// posts.js — aggiungi i tuoi pensieri qui

const POSTS = [
  {
    id: 1,
    date: "2026-04-13",
    tags: ["random"],
    title: "Inizio.",
    excerpt: "Non so ancora cosa sarà questo posto. Ma avevo bisogno di un posto mio.",
    body: `<p>Inizio senza sapere dove arrivo. Non è un blog nel senso classico. Non è un diario. È qualcosa di mezzo.</p>
<p>Un posto dove buttare giù quello che ho in testa, senza filtri, senza algoritmi che decidono cosa vale la pena dire.</p>
<p>Forse non lo leggerà nessuno. Va bene così.</p>`
  },
{
    id: 2,
    date: "2026-04-20",
    tags: ["random", "celebrations"],
    title: "Again and again...",
    excerpt: "Birthday Celebration and the joy of being together.",
    body: `<p>Compleanno appena passato e la voglia di stare insieme alle persone care. La vita è stancante, ma ogni tanto è bello fermarsi e guardare le persone care che ti stanno intorno.</p>
    <p>Ora è ora di rimettersi in viaggio, ripartire ed andare avanti</p>`
  },
  {
    id: 3,
    date: "2026-05-05",
    tags: ["scelte", "tempo"],
    title: "Lasciare andare per capire",
    excerpt: "A volte la scelta non è tra due vie, ma tra restare dove si impara e andare dove non si è ancora pronti.",
    body: `<p>Ultimamente ho fatto una scelta che sembrava semplice da fuori, ma che dentro era fatta di calma e verifica.</p>
    <p>Non era una questione di orgoglio, né di vincere una sfida: era capire cosa mi dava soddisfazione oggi e cosa era soltanto un cambiamento frettoloso.</p>
    <p>Ho scelto di lasciare andare un'opportunità che non risuonava del tutto, anche se poteva sembrare attraente. Ho capito che per ora sono nel posto giusto, perché qui posso crescere senza inseguire nulla che non sento davvero mio.</p>
    <p>Spesso le cose migliori nascono da un'analisi attenta, non da scelte prese di impulso. Vale la pena prendersi il tempo per capire.</p>`
  },
  {
    id: 4,
    date: "2026-05-11",
    tags: ["famiglia", "emozioni", "valori"],
    title: "Non perdere il filo.",
    excerpt: "La vita quotidiana è rumorosa. E ogni tanto il rumore copre le cose che contano davvero.",
    body: `<p>Oggi mi sono fermato un secondo — una di quelle pause che non pianifichi, che arrivano da sole — e mi sono chiesto: ma io quando è stata l'ultima volta che ho detto a qualcuno che gli voglio bene, e lo intendevo davvero, in quel momento lì?</p>
<p>Non in fretta. Non tra una cosa e l'altra. Ma con presenza.</p>
<p>La vita quotidiana ha un'inerzia sua. Le urgenze si accumulano, le settimane scivolano via, e io mi ritrovo a inseguire task, scadenze, problemi da risolvere. Sono bravo in quello. Mi viene naturale. Ma le emozioni — quelle vere, quelle che fanno male o fanno bene — le tengo troppo spesso dentro, come se esporle fosse una debolezza o una distrazione.</p>
<p>Non lo è.</p>
<p>Le persone vicine a me non hanno bisogno della mia efficienza. Hanno bisogno di me. Di quello che sento, di quello che penso, di come sto. E io ho bisogno di loro — anche se a volte lo dimentico.</p>
<p>Scrivere questa cosa qui è già un passo. Ricordarmi che esistono valori più grandi delle priorità di questa settimana. Che la famiglia, gli amici veri, le persone che rimangono — quelli sono i fondamentali. Il resto è contorno.</p>
<p>Non voglio aspettare un altro compleanno, o un momento difficile, per ricordarmi di esserci davvero.</p>`
  },
  {
    id: 5,
    date: "2026-05-15",
    tags: ["emozioni", "resilienza", "tempo"],
    title: "Anche questo passerà.",
    excerpt: "I momenti difficili sembrano eterni. Non lo sono. E anche quando restano, si impara a trovarci spazio intorno.",
    body: `<p>C'è una cosa che nei momenti neri faccio fatica a ricordarmi: che sono momenti. Non stati permanenti. Non la nuova versione della mia vita.</p>
<p>Quando stai dentro a qualcosa di difficile — una perdita, una stanchezza profonda, un periodo in cui tutto sembra storto — è quasi impossibile vedere al di là. Il presente diventa tutto. E il tutto sembra sempre così pesante.</p>
<p>Ma poi passa. O almeno si trasforma.</p>
<p>Non sempre si guarisce in modo netto, con un confine preciso tra il prima e il dopo. A volte si impara a conviverci. A portare con sé quella cosa pesante senza che ti blocchi i passi. Si trova un ritmo diverso. Più lento, magari, ma comunque un ritmo.</p>
<p>L'ho vissuto abbastanza volte da crederci, anche se ogni volta faccio fatica a crederci sul momento.</p>
<p>E penso che questo valga per tante persone — molto più di quante lo dichiarino. Perché i momenti difficili si nascondono bene. Si portano in silenzio, con il pilota automatico acceso, continuando a fare le cose di sempre mentre dentro si sta navigando qualcosa di complicato.</p>
<p>Se sei in uno di quei momenti adesso: non devi uscirne subito. Non devi "stare bene" secondo una tempistica che non esiste. Devi solo continuare ad andare avanti, anche di poco. Anche un giorno alla volta.</p>
<p>Anche questo passerà. O almeno, troverai il modo di farci spazio.</p>`
  },
  {
    id: 6,
    date: "2026-06-04",
    tags: ["famiglia", "tranquillita", "valori"],
    title: "Scelgo la pace.",
    excerpt: "Non devo seguire quello che si aspettano gli altri: oggi scelgo la calma, la mia famiglia e le persone che mi fanno stare bene.",
    body: `<p>Ci sono giorni in cui tutti sembrano sapere cosa dovrei fare io. Dove dovrei andare, come dovrei vivere, cosa dovrei inseguire.</p>
<p>Io, invece, sento altro.</p>
<p>Con il tempo ho capito che non sono piu quello di prima. Non sono piu cosi amante delle feste, del rumore, del dover esserci per forza. Non mi manca quella corsa.</p>
<p>Mi fa stare meglio una serata semplice, una cena in casa, due parole vere con la mia famiglia, un momento tranquillo con chi mi sta intorno e mi vuole bene davvero.</p>
<p>Questa non e chiusura. E una scelta. E il mio modo di stare bene.</p>
<p>Voglio proteggere questa pace. Voglio dare tempo alle persone che contano, senza sentirmi in difetto se non seguo il copione degli altri.</p>
<p>Alla fine, i valori veri restano sempre gli stessi: affetto, presenza, serenita. Il resto puo aspettare.</p>`
  },
  {
    id: 7,
    date: "2026-06-16",
    tags: ["resilienza", "adattamento", "crescita"],
    title: "Alla fine va sempre bene.",
    excerpt: "Il cambiamento è l'unica costante. E la capacità di adattarsi è il vero superpotere. Si esce sempre più forti.",
    body: `<p>C'è una cosa che ho imparato sulla mia pelle — e che tante persone capiranno ascoltandomi — è che alla fine va sempre bene.</p>
<p>Non intendo dire che tutto si risolve come in una favola. Non è così. Intendo dire che non c'è una situazione, per quanto difficile, da cui non si possa uscire. E non solo uscirne: esserne trasformati. In meglio.</p>
<p>Il cambiamento arriva comunque. Lo cerchi o no. È inevitabile. E per una lunghissimo tempo ho combattuto contro di lui — cercando di mantenere tutto come era, convinto che l'immobilità fosse sicurezza.</p>
<p>Non lo è.</p>
<p>Ho scoperto che la vera forza non è la rigidità — è la flessibilità. È la capacità di guardare una situazione nuova e dire: "Ok, non è quello che mi aspettavo, ma vediamo cosa posso fare con questo".</p>
<p>Ogni volta che mi sono adattato — e sono stato costretto a farlo — ho scoperto cose di me che non conoscevo. Ho trovato risorse che non sapevo di avere. Ho fatto scelte che non avrei mai fatto se il cambiamento non mi avesse spinto.</p>
<p>E ogni volta, sono uscito più forte di prima.</p>
<p>Non parlo solo di problemi grandi. Parlo di cambiamenti di lavoro, di relazioni che finiscono, di progetti che saltano, di piani che vanno a monte. Tutte quelle cose che sembrano disastri nel momento.</p>
<p>Ma dopo? Dopo capisci che erano solo pietre miliari sulla strada verso qualcosa di meglio. O almeno, verso una versione di te stesso più consapevole e più resiliente.</p>
<p>Quindi se adesso stai attraversando un cambiamento che non avevi scelto, che ti fa paura, che ti sembra impossibile da gestire: sappi che non è il finale della tua storia. È uno dei capitoli. E probabilmente tra qualche mese guarderai indietro e capirai che avevi bisogno di quello, proprio in quel momento.</p>
<p>Adattarsi non è arrendersi. È evolversi. E ogni volta che evolvi, esci più forte.</p>
<p>Fidati di questo. Io l'ho visto accadere troppe volte per dubitarne.</p>`
  }
];
