(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };

  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) {
      if (k === "class") node.className = props[k];
      else if (k === "text") node.textContent = props[k];
      else node.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  /* ---------- Profil ---------- */
  document.title = PROFILE.nama + " | Portofolio";
  $("#brand").textContent = PROFILE.nama;
  $("#hero-nama").textContent = PROFILE.nama;
  $("#hero-peran").textContent = PROFILE.peran;
  $("#hero-intro").textContent = PROFILE.intro;
  $("#hero-status").textContent = PROFILE.status;
  $("#foot-teks").textContent = "© " + new Date().getFullYear() + " " + PROFILE.nama + " · " + PROFILE.lokasi;

  PROFILE.tentang.forEach(function (t) { $("#tentang-teks").appendChild(el("p", { text: t })); });

  PROFILE.keahlian.forEach(function (g) {
    var list = el("ul", { class: "tags" }, g.daftar.map(function (d) { return el("li", { text: d }); }));
    $("#keahlian").appendChild(el("div", null, [el("h3", { text: g.grup }), list]));
  });

  PROFILE.kontak.forEach(function (k) {
    var a = el("a", { href: k.href, text: k.teks });
    if (/^https?:/.test(k.href)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    $("#kontak-list").appendChild(el("li", null, [el("span", { class: "lbl", text: k.label }), a]));
  });

  if (PROFILE.cv) {
    var cv = $("#cv");
    cv.href = PROFILE.cv;
    cv.setAttribute("download", "");
    cv.hidden = false;
  }

  /* ---------- Daftar proyek ---------- */
  var aktif = "Semua";
  var daftar = $("#daftar");
  var filterBox = $("#filter");
  var dialog = $("#detail");
  var pemicu = null;

  var kategori = ["Semua"];
  PROJECTS.forEach(function (p) { if (kategori.indexOf(p.kategori) === -1) kategori.push(p.kategori); });

  function renderFilter() {
    filterBox.innerHTML = "";
    if (kategori.length <= 2) return; // satu kategori saja, filter tidak perlu
    kategori.forEach(function (k) {
      var b = el("button", { type: "button", text: k, "aria-pressed": String(k === aktif) });
      b.addEventListener("click", function () { aktif = k; renderFilter(); renderDaftar(); });
      filterBox.appendChild(b);
    });
  }

  function renderDaftar() {
    daftar.innerHTML = "";
    var tampil = PROJECTS.filter(function (p) { return aktif === "Semua" || p.kategori === aktif; });
    if (!tampil.length) {
      daftar.appendChild(el("li", { class: "kosong", text: "Belum ada proyek di kategori ini." }));
      return;
    }
    tampil.forEach(function (p) {
      var btn = el("button", { class: "baris", type: "button" }, [
        el("span", { class: "judul", text: p.judul }),
        el("span", { class: "info", text: p.kategori + ", " + p.tahun }),
        el("span", { class: "ringkas", text: p.ringkas })
      ]);
      btn.addEventListener("click", function () { buka(p, btn); });
      daftar.appendChild(el("li", null, [btn]));
    });
  }

  /* ---------- Detail proyek ---------- */
  function buka(p, tombol) {
    pemicu = tombol;
    var media = $("#d-media");
    media.innerHTML = "";
    if (p.gambar) {
      media.appendChild(el("img", { src: p.gambar, alt: "Tangkapan layar " + p.judul, loading: "lazy" }));
    } else {
      var inisial = p.judul.split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("");
      media.appendChild(el("span", { class: "inisial", "aria-hidden": "true", text: inisial }));
    }

    $("#d-judul").textContent = p.judul;
    $("#d-meta").textContent = p.peran + ", " + p.tahun;
    $("#d-desk").textContent = p.deskripsi;

    var tags = $("#d-tags");
    tags.innerHTML = "";
    p.teknologi.forEach(function (t) { tags.appendChild(el("li", { text: t })); });

    var links = $("#d-links");
    links.innerHTML = "";
    if (p.demo) links.appendChild(el("a", { href: p.demo, target: "_blank", rel: "noopener", text: "Buka demo" }));
    if (p.repo) links.appendChild(el("a", { class: p.demo ? "sekunder" : "", href: p.repo, target: "_blank", rel: "noopener", text: "Lihat kode" }));

    dialog.showModal();
  }

  $("#d-tutup").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", function () { if (pemicu) pemicu.focus(); });

  renderFilter();
  renderDaftar();
})();
