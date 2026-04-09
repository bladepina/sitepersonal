// app.js

const grid = document.getElementById('postsGrid');
const overlay = document.getElementById('postOverlay');
const modalInner = document.getElementById('postModalInner');
const closeBtn = document.getElementById('closeBtn');
const tagBtns = document.querySelectorAll('.tag-btn');

let activeTag = 'all';

// ── UTILS ──────────────────────────────────────

function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  const months = ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
}

function buildTagHTML(tags) {
  return tags.map(t => `<span class="tag tag-${t}">#${t}</span>`).join('');
}

// ── RENDER CARDS ──────────────────────────────

function renderPosts(tag) {
  const filtered = tag === 'all' ? POSTS : POSTS.filter(p => p.tags.includes(tag));
  // newest first
  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  if (sorted.length === 0) {
    grid.innerHTML = `<div class="empty-state">// nessun pensiero con questo tag (ancora)</div>`;
    return;
  }

  grid.innerHTML = sorted.map(post => `
    <article class="post-card" data-id="${post.id}" role="button" tabindex="0" aria-label="${post.title}">
      <div class="post-card-top">
        <span class="post-date">${formatDate(post.date)}</span>
        <div class="post-tags">${buildTagHTML(post.tags)}</div>
      </div>
      <h2 class="post-title">${post.title}</h2>
      <p class="post-excerpt">${post.excerpt}</p>
      <span class="post-read-more">leggi →</span>
    </article>
  `).join('');

  // attach click events
  grid.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => openPost(parseInt(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openPost(parseInt(card.dataset.id));
    });
  });
}

// ── MODAL ─────────────────────────────────────

function openPost(id) {
  const post = POSTS.find(p => p.id === id);
  if (!post) return;

  modalInner.innerHTML = `
    <div class="modal-date">${formatDate(post.date)}</div>
    <div class="modal-tags">${buildTagHTML(post.tags)}</div>
    <h1 class="modal-title">${post.title}</h1>
    <div class="modal-body">${post.body}</div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closePost() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closePost);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closePost();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePost();
});

// ── FILTER ────────────────────────────────────

tagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    activeTag = btn.dataset.tag;
    tagBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPosts(activeTag);
  });
});

// ── INIT ──────────────────────────────────────

renderPosts('all');
