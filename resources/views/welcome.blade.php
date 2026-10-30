<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dwi Haris Riza Darmawan | Portofolio</title>
    <meta name="description" content="Portofolio proyek dan karya." />
    <meta name="theme-color" content="#E8EDF1" />
    <link
      rel="icon"
      href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%232B3FE0'/%3E%3Cpath d='M20 46V18h13a9 9 0 0 1 0 18H20' fill='none' stroke='%23fff' stroke-width='6'/%3E%3C/svg%3E"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Figtree:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <a class="skip" href="#proyek">Lewati ke proyek</a>

    <header class="top">
      <a class="brand" href="#" id="brand">Dwi Haris Riza Darmawan</a>
      <nav aria-label="Navigasi utama">
        <a href="#proyek">Proyek</a>
        <a href="#tentang">Tentang</a>
        <a href="#kontak">Kontak</a>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="judul-utama">
        <h1 id="judul-utama">
          <span class="line"
            ><span id="hero-nama">Dwi Haris Riza Darmawan</span></span
          >
          <span class="line"
            ><span id="hero-peran" class="peran">Web Developer</span></span
          >
        </h1>
        <p class="intro" id="hero-intro"></p>
        <p class="status">
          <span class="dot" aria-hidden="true"></span
          ><span id="hero-status"></span>
        </p>
      </section>

      <section id="proyek" class="proyek" aria-labelledby="h-proyek">
        <div class="sec-head">
          <h2 id="h-proyek">Proyek</h2>
          <div
            class="filter"
            id="filter"
            role="group"
            aria-label="Filter kategori"
          ></div>
        </div>
        <ul class="daftar" id="daftar"></ul>
        <noscript
          ><p>Aktifkan JavaScript untuk melihat daftar proyek.</p></noscript
        >
      </section>

      <section id="tentang" class="tentang" aria-labelledby="h-tentang">
        <h2 id="h-tentang">Tentang</h2>
        <div class="tentang-grid">
          <div class="teks" id="tentang-teks"></div>
          <div class="skill" id="keahlian"></div>
        </div>
      </section>

      <section id="kontak" class="kontak" aria-labelledby="h-kontak">
        <h2 id="h-kontak">Mari ngobrol</h2>
        <p class="kontak-intro">
          Punya proyek atau lowongan? Kirim pesan lewat salah satu kanal ini.
        </p>
        <ul class="kontak-list" id="kontak-list"></ul>
        <a class="cv" id="cv" hidden>Unduh CV</a>
      </section>
    </main>

    <footer class="foot">
      <span id="foot-teks"></span>
    </footer>

    <dialog id="detail" aria-labelledby="d-judul">
      <article>
        <button class="tutup" id="d-tutup" aria-label="Tutup detail proyek">
          Tutup
        </button>
        <div class="d-media" id="d-media"></div>
        <div class="d-isi">
          <h3 id="d-judul"></h3>
          <p class="d-meta" id="d-meta"></p>
          <p id="d-desk"></p>
          <ul class="tags" id="d-tags"></ul>
          <p class="d-links" id="d-links"></p>
        </div>
      </article>
    </dialog>

    <script src="data.js"></script>
    <script src="script.js"></script>
  </body>
</html>
