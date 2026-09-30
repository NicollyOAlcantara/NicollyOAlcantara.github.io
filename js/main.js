/* ---------------- Renderização ---------------- */
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function renderHero() {
  document.title = `${DATA.nome} · Portfólio`;
  const first = DATA.nome.split(" ")[0];
  $("logo").innerHTML = `${esc(first)}<i>.</i>`;
  $("status").textContent = DATA.disponivel;
  $("cvBtn").href = DATA.curriculo; $("cvBtn").setAttribute("download", "");
  DATA.destaques.forEach(t => $("traits").append(el("li", "", esc(t))));
  $("heroTitle").innerHTML = `Olá, eu sou ${esc(DATA.nome)}.<span>${esc(DATA.cargo)}</span>`;
  $("heroText").textContent = DATA.hero;
}

function renderAbout() {
  $("aboutText").innerHTML = DATA.sobre.map(p => `<p>${esc(p)}</p>`).join("");
  DATA.fatos.forEach(([k, v]) => {
    const val = k === "Idade" ? `${DATA.idade} anos` : k === "Localização" ? DATA.cidade : v;
    $("facts").append(el("div", "fact", `<span>${k}</span><strong>${esc(val)}</strong>`));
  });
}

function timeline(items) {
  return `<ul class="timeline">${items.map(i => `<li><h3>${esc(i.titulo)}</h3><div class="where">${esc(i.onde)}</div><div class="when">${esc(i.quando)}</div><p>${esc(i.texto)}</p></li>`).join("")}</ul>`;
}
function renderSkills() {
  DATA.competencias.forEach(c => $("comps").append(el("article", "comp" + (c.destaque ? " hl" : ""),
    `<h3>${esc(c.titulo)}</h3>${c.nivel ? `<div class="nivel">${esc(c.nivel)}</div>` : ""}${c.texto ? `<p>${esc(c.texto)}</p>` : ""}<div class="chips">${c.itens.map(i => `<span class="chip">${esc(i)}</span>`).join("")}</div>`)));
}
function renderResume() {
  const tabs = [["Formação", timeline(DATA.formacao)], ["Experiência", timeline(DATA.experiencia)]];
  tabs.forEach(([name, html], i) => {
    const t = el("button", "tab", name);
    t.setAttribute("role", "tab"); t.id = `tab${i}`; t.setAttribute("aria-controls", `panel${i}`);
    const p = el("div", "panel", html);
    p.setAttribute("role", "tabpanel"); p.id = `panel${i}`; p.setAttribute("aria-labelledby", t.id); p.hidden = i !== 0;
    t.setAttribute("aria-selected", i === 0);
    t.onclick = () => document.querySelectorAll(".tab").forEach((tb, j) => {
      tb.setAttribute("aria-selected", j === i);
      $(`panel${j}`).hidden = j !== i;
    });
    $("tabs").append(t); $("panels").append(p);
  });
}

function renderProjects() {
  const types = ["Todos", ...new Set(DATA.projetos.map(p => p.tipo))];
  types.forEach((t, i) => {
    const b = el("button", "tab", t); b.setAttribute("aria-selected", i === 0);
    b.onclick = () => {
      $("filters").querySelectorAll(".tab").forEach(x => x.setAttribute("aria-selected", x === b));
      $("projects").querySelectorAll(".card").forEach(c => c.hidden = t !== "Todos" && c.dataset.tipo !== t);
    };
    $("filters").append(b);
  });
  DATA.projetos.forEach((p, idx) => {
    const links = [p.galeria && `<button class="open" type="button">Ver dashboard</button>`, p.link && `<a href="${esc(p.link)}" target="_blank" rel="noopener">Ver projeto</a>`, p.repo && `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Código</a>`].filter(Boolean).join("");
    const c = el("article", "card", `<button class="thumb" type="button" aria-label="Ver dashboard: ${esc(p.titulo)}">${p.img ? `<img src="${p.img}" alt="" loading="lazy">` : ""}</button><div class="body"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p><div class="chips">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div><div class="links">${links}</div></div>`);
    c.dataset.tipo = p.tipo;
    c.querySelectorAll(".thumb, .open").forEach(b => b.onclick = () => openLightbox(p)); $("projects").append(c);
  });
}

function renderContact() {
  const c = DATA.contato;
  $("contactTitle").textContent = c.titulo; $("contactText").textContent = c.texto;
  c.links.forEach(([nome, url], i) => { if (!url) return; const a = el("a", "btn" + (i ? " ghost" : ""), esc(nome)); a.href = url; if (url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; } $("contactLinks").append(a); });
  $("footer").textContent = `© ${new Date().getFullYear()} ${DATA.nome}`;
}

/* Tema claro/escuro */
$("theme").onclick = () => {
  const r = document.documentElement, dark = getComputedStyle(r).getPropertyValue("--bg").trim() === "#141737";
  r.dataset.theme = dark ? "light" : "dark";
};

renderHero(); renderAbout(); renderSkills(); renderResume(); renderProjects(); renderContact();

/* Galeria dos dashboards */
const lb = $("lightbox"); let cur = {p: null, i: 0};
function showSlide() {
  const g = cur.p.galeria;
  $("lbImg").src = g[cur.i]; $("lbImg").alt = `${cur.p.titulo}, página ${cur.i + 1} de ${g.length}`;
  $("lbCount").textContent = `${cur.i + 1} / ${g.length}`; $("lbTitle").textContent = cur.p.titulo;
  $("lbPrev").hidden = $("lbNext").hidden = g.length < 2;
}
function openLightbox(p) { cur = {p, i: 0}; showSlide(); lb.showModal(); }
const step = n => { cur.i = (cur.i + n + cur.p.galeria.length) % cur.p.galeria.length; showSlide(); };
$("lbPrev").onclick = () => step(-1); $("lbNext").onclick = () => step(1); $("lbClose").onclick = () => lb.close();
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
