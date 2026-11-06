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
        'status' => 'Terbuka untuk magang',
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
            'judul' => 'Ngotok 3D',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Pembuatan Game Single Player berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game fun multiplayer berbasis Unity untuk PC. Pada game ini kita cukup menggerakkan 1 kapal dengan 1 pemain saja menggunakan tombol WASD. Game ini memiliki beberapa level yang harus diselesaikan oleh pemain.',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '/assets/projects/ngotok.png',
            'demo' => 'https://nifaxha.itch.io/ngotok-3d',
            'repo' => '',
        ],
        [
            'judul' => 'Chatbot Bimbel',
            'tahun' => 2026,
            'kategori' => 'Chatbot',
            'peran' => 'Project Manager',
            'ringkas' => 'Pembuatan chatbot Bimbel untuk mempermudah siswa dalam menjawab sebuah pertanyaan',
            'deskripsi' => 'Pembuatan chatbot Bimbel untuk mempermudah siswa dalam menjawab sebuah pertanyaan. Chatbot ini dapat digunakan untuk menjawab pertanyaan seputar materi bimbel, jadwal bimbel, dan informasi lainnya. Chatbot ini dibuat menggunakan Laravel, N8N, Blade.php, dan Docker. Selain itu chatbot ini sudah diintergrasikan dengan WhatsApp sehingga siswa dapat mengakses chatbot ini melalui WhatsApp dan telah diintegrasikan dengan API Deepseek V4 pro untuk menjawab pertanyaan siswa.',
            'teknologi' => ['Laravel', 'N8N', 'Blade.php', 'Docker'],
            'gambar' => '/assets/projects/chatbot-bimbel.png',
            'demo' => '',
            'repo' => '',
        ],
        [
            'judul' => 'Boat Together',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game fun multiplayer berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game fun multiplayer berbasis Unity untuk PC. Pada game ini kita menggerakkan 1 kapal dengan 2 peran pemain, dimana 1 pemain menggerakkan bagian kiri kapal dan 1 pemain menggerakkan bagian kanan kapal. Game ini memiliki beberapa level yang harus diselesaikan oleh pemain.',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '/assets/projects/boat-together.png',
            'demo' => 'https://nifaxha.itch.io/boat-together',
            'repo' => '',
        ],
        [
            'judul' => 'Trust Fall',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game multiplayer Co-op berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game multiplayer Co-op berbasis Unity untuk PC. Game ini kita hanya memiliki satu tubuh yang dikendalikan oleh dua pemain. Game ini kita memainkan karakter orang buta. Terdapat 2 role, sebagai mata dan sebagai tubuh',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '/assets/projects/trust-fall.png',
            'demo' => 'https://nifaxha.itch.io/trust-fall',
            'repo' => '',
        ],
        [
            'judul' => 'Just Drive Bro!',
            'tahun' => 2026,
            'kategori' => 'Game Developer',
            'peran' => 'Game Programmer',
            'ringkas' => 'Game racing multiplayer dan singleplayer berbasis Unity untuk PC.',
            'deskripsi' => 'Game ini merupakan game racing multiplayer dan singleplayer berbasis Unity untuk PC. Meskipun game ini multiplayer tapi kita memainkan nya di satu device saja dengan layar yang terbelah menjadi 2. Game ini memiliki beberapa map yang bisa dimainkan oleh pemain, tetapi untuk membuka map baru pemain harus menyelesaikan map sebelumnya. Ketika bermain single player, pemain akan melawan AI yang memiliki tingkat kesulitan yang saat ini sudah diatur.',
            'teknologi' => ['Unity', 'C#'],
            'gambar' => '/assets/projects/just-drive-bro.png',
            'demo' => 'https://nifaxha.itch.io/just-drive-bro',
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
            'gambar' => '/assets/projects/GrowBack.png',
            'demo' => 'https://nifaxha.itch.io/growback',
            'repo' => '',
        ],
    ],

];
