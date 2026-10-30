<?php

/*
|--------------------------------------------------------------------------
| Isi website portofolio
|--------------------------------------------------------------------------
|
| Edit file ini saja untuk mengganti isi website. Setelah mengubah, jalankan ulang:
|   docker compose up -d --build
|
*/

return [

    'profile' => [
        'nama' => 'Dwi Haris Riza Darmawan',
        'peran' => 'Game Developer & Web Developer',
        'lokasi' => 'Surabaya, Indonesia',
        'status' => 'Terbuka untuk proyek magang',
        'intro' => 'Aku membuat aplikasi web yang cepat dan mudah dipakai. Di bawah ini beberapa proyek yang pernah aku kerjakan.',
        'tentang' => [
            'Saya biasanya berperan sebagai Front End Developer, Game Programmer, dan Project Manager. Saya memiliki pengalaman dalam mengembangkan aplikasi web dan game menggunakan berbagai teknologi.',
            'Saya memiliki kemampuan dalam bahasa pemrograman seperti JavaScript, Python, HTML & CSS, dan C#. Selain itu, saya juga terbiasa menggunakan framework seperti React, Laravel, dan Tailwind CSS. Saya juga memiliki pengalaman dalam menggunakan platform seperti Git & GitHub, Figma, MySQL, dan Unity.',
        ],
        'keahlian' => [
            ['grup' => 'Language', 'daftar' => ['JavaScript', 'Python', 'HTML & CSS', 'C#']],
            ['grup' => 'Framework', 'daftar' => ['React', 'Laravel', 'Tailwind CSS']],
            ['grup' => 'Platform', 'daftar' => ['Git & GitHub', 'MySQL', 'Unity']],
        ],
        'kontak' => [
            ['label' => 'Email', 'teks' => 'harizriza30@gmail.com', 'href' => 'mailto:harizriza30@gmail.com'],
            ['label' => 'GitHub', 'teks' => 'github.com/Nifaxha', 'href' => 'https://github.com/Nifaxha'],
            ['label' => 'LinkedIn', 'teks' => 'linkedin.com/in/Nifaxha', 'href' => 'https://linkedin.com/in/Nifaxha'],
        ],
        // Opsional: taruh file CV di folder public/ lalu isi namanya, misalnya 'cv.pdf'. Kosongkan jika tidak ada.
        'cv' => '',
    ],

    /*
    | Satu array = satu proyek.
    |  - kategori : dipakai untuk tombol filter
    |  - gambar   : opsional, path di folder public/ (contoh: 'images/boat-together.png').
    |               Kalau kosong, website membuat blok warna dengan inisial proyek.
    |  - demo/repo: opsional, kosongkan ('') kalau tidak ada.
    */
    'projects' => [
        [
            'judul' => 'Website TMT',
            'tahun' => 2026,
            'kategori' => 'Web',
            'peran' => 'Front-end developer',
            'ringkas' => 'Pembuatan Website TMT untuk membantu guru dalam mengelola data siswa.',
            'deskripsi' => 'Website ini nantinya berfungsi untuk membantu guru dalam mengelola data siswa, seperti absensi, nilai, dan jadwal pelajaran. Website ini juga memiliki fitur untuk menampilkan informasi penting kepada siswa dan orang tua.',
            'teknologi' => ['Laravel', 'React', 'Tailwind CSS', 'Blade.php', 'Docker'],
            'gambar' => '',
            'demo' => '',
            'repo' => 'https://github.com/Nifaxha/kasir-warung',
        ],
        [
            'judul' => 'Chatbot Bimbel',
            'tahun' => 2026,
            'kategori' => 'Chatbot',
            'peran' => 'Project Manager',
            'ringkas' => 'Pembuatan chatbot Bimbel untuk mempermudah siswa dalam menjawab sebuah pertanyaan',
            'deskripsi' => 'Dashboard interaktif yang merangkum penjualan per produk dan per cabang. Sebutkan angka atau dampak nyata kalau ada, misalnya waktu pembuatan laporan turun dari 2 jam menjadi 5 menit.',
            'teknologi' => ['Laravel', 'N8N', 'Blade.php', 'Docker'],
            'gambar' => '',
            'demo' => 'https://Nifaxha.github.io/dashboard',
            'repo' => 'https://github.com/Nifaxha/dashboard-penjualan',
        ],
        [
            'judul' => 'Boat Together',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game fun multiplayer berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game fun multiplayer berbasis Unity untuk PC. Pada game ini kita menggerakkan 1 kapal dengan 2 peran pemain, dimana 1 pemain menggerakkan bagian kiri kapal dan 1 pemain menggerakkan bagian kanan kapal. Game ini memiliki beberapa level yang harus diselesaikan oleh pemain.',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '',
            'demo' => '',
            'repo' => 'https://github.com/Nifaxha/catatan-belajar',
        ],
        [
            'judul' => 'Trust Fall',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game multiplayer Co-op berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game multiplayer Co-op berbasis Unity untuk PC. Game ini kita hanya memiliki satu tubuh yang dikendalikan oleh dua pemain. Game ini kita memainkan karakter orang buta. Terdapat 2 role, sebagai mata dan sebagai tubuh',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '',
            'demo' => 'https://Nifaxha.github.io/komunitas',
            'repo' => '',
        ],
        [
            'judul' => 'Just Drive Bro!',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game multiplayer Co-op berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game multiplayer Co-op berbasis Unity untuk PC. Game ini kita hanya memiliki satu tubuh yang dikendalikan oleh dua pemain. Game ini kita memainkan karakter orang buta. Terdapat 2 role, sebagai mata dan sebagai tubuh',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '',
            'demo' => 'https://Nifaxha.github.io/komunitas',
            'repo' => '',
        ],
        [
            'judul' => 'GrowBack',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game multiplayer Co-op berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game multiplayer Co-op berbasis Unity untuk PC. Game ini kita hanya memiliki satu tubuh yang dikendalikan oleh dua pemain. Game ini kita memainkan karakter orang buta. Terdapat 2 role, sebagai mata dan sebagai tubuh',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '',
            'demo' => 'https://Nifaxha.github.io/komunitas',
            'repo' => '',
        ],
    ],

];
