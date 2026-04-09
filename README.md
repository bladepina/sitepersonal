# blade_logs

> uno spazio personale. pensieri in ordine sparso.

---

Blog minimale statico — HTML, CSS, JS vanilla. Nessuna dipendenza, nessun framework, nessun tracciamento.

### Come aggiungere un post

Apri `posts.js` e aggiungi un oggetto all'array `POSTS`:

```js
{
  id: 6,                          // incrementa
  date: "2026-04-10",             // YYYY-MM-DD
  tags: ["tech"],                 // tech | ai | random | fishing | gaming | animals
  title: "Il titolo del pensiero",
  excerpt: "Una riga di anteprima.",
  body: `<p>Il testo completo.</p>`
}
```

### Come pubblicarlo online (GitHub Pages)

Questo progetto è statico (solo `index.html`, `style.css`, `app.js`, `posts.js`), quindi puoi pubblicarlo direttamente con GitHub Pages:

1. fai push del repository su GitHub
2. vai in **Settings → Pages**
3. in **Build and deployment**, seleziona:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (o il branch che usi) / `/root`
4. salva e attendi il deploy (1-2 minuti)
5. il sito sarà disponibile all'URL mostrato in quella pagina (es. `https://<username>.github.io/<repo>/`)

Se vuoi usare un dominio custom:

1. in **Settings → Pages** imposta il dominio in **Custom domain**
2. configura i record DNS (`CNAME` o `A`) presso il tuo provider
3. abilita **Enforce HTTPS** quando disponibile

Per test locale rapido puoi aprire direttamente `index.html` nel browser, oppure avviare un server statico:

```bash
python3 -m http.server 8080
```

e poi visita `http://localhost:8080`.

### Stack

- HTML / CSS / JS vanilla
- Font: JetBrains Mono + Inter (Google Fonts)
- Zero dipendenze. Zero tracciamento.

---

*nessun cookie. nessun tracciamento. solo parole.*
