export const projects = [
    {
        id: "growback",
        nama: "GrowBack",
        kategori: "3D Ecology & Farming Simulation Game",
        deskripsi: "Game simulasi ekologi dan pertanian 3D berbasis Unity yang menekankan mekanik pengelolaan lahan dan restorasi lingkungan.",
        teknologi: ["Unity", "C#", "Blender"],
        highlights: [
            "Sistem tile grid dinamis untuk pengelolaan status tanah dan propagasi polusi lingkungan.",
            "Mekanik penanganan alat berkebun, efek debuff karakter, serta visualisasi visual alat yang responsif.",
            "Interaksi NPC toko untuk jual-beli item dan sistem penyimpanan data (save system) yang kontinu.",
            "Visual 3D kustom yang dioptimalkan dari model Blender menggunakan teknik cel-shading."
        ],
        demoUrl: "https://itch.io",
        githubUrl: "https://github.com"
    },
    {
        id: "runtime-error",
        nama: "Runtime Error",
        kategori: "2D Asymmetric Co-op Multiplayer Game",
        deskripsi: "Game multiplayer kooperatif asimetris 2D berbasis jaringan real-time.",
        teknologi: ["Unity", "C#", "FishNet"],
        highlights: [
            "Arsitektur jaringan multiplayer asimetris berbasis FishNet Networking.",
            "Desain teka-teki kooperatif yang membutuhkan komunikasi dan sinkronisasi data antar pemain secara presisi.",
            "Implementasi state machine untuk manajemen input dan interaksi role pemain yang berbeda."
        ],
        demoUrl: "https://itch.io",
        githubUrl: "https://github.com"
    },
    {
        id: "adaptive-pcg-runner",
        nama: "Adaptive PCG Runner",
        kategori: "Procedural Content Generation & ML",
        deskripsi: "Proyek riset penataan rintangan adaptif menggunakan Machine Learning berdasarkan analisis playstyle pemain pada game 3D endless runner.",
        teknologi: ["Unity", "C#", "Python", "ML-Agents"],
        highlights: [
            "Generasi rintangan prosedural (PCG) yang menyesuaikan tingkat kesulitan dan variasi pola secara real-time.",
            "Analisis telemetry pola gerakan pemain untuk penyesuaian parameter Machine Learning secara presisi.",
            "Struktur level dinamis dengan performa tinggi tanpa jeda saat instansiasi objek."
        ],
        demoUrl: "https://itch.io",
        githubUrl: "https://github.com"
    }
];