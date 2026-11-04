import React, { useState } from 'react';

export default function HomeProjects({ onNavigateToProjects }) {
    // State untuk mengontrol ekspansi penjelasan singkat tiap proyek
    const [expandedProject, setExpandedProject] = useState({
        p1: false,
        p2: false,
    });

    // Toggle ekspansi penjelasan per proyek
    const toggleExpand = (id) => {
        setExpandedProject((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Data 2 proyek unggulan untuk landing page
    const featuredProjects = [
        {
            id: 'p1',
            title: 'Website TMT',
            subtitle: 'Sistem Informasi Pengelolaan Data Siswa',
            image: '/assets/projects/website-tmt.png',
            align: 'left',
            stack: ['Laravel', 'React', 'Tailwind CSS'],
            role: 'Front-End Developer',
            shortDesc: 'Aplikasi web interaktif untuk membantu guru mengelola absensi, nilai, dan jadwal pelajaran secara efisien.',
        },
        {
            id: 'p2',
            title: 'Runtime Error',
            subtitle: '2D Asymmetric Co-op Puzzle Platformer',
            image: '/assets/projects/runtime-error.png',
            align: 'right',
            stack: ['Unity', 'C#', 'FishNet'],
            role: 'Backend & Database Developer',
            shortDesc: 'Game platformer kooperatif asimetris dengan sistem jaringan multiplayer dan sinkronisasi database server.',
        },
    ];

    const project1 = featuredProjects[0];
    const project2 = featuredProjects[1];

    return (
        <section id="proyek-ungulan" className="max-w-5xl mx-auto px-6 sm:px-10 py-10 scroll-mt-20">
            {/* Judul Seksi */}
            <div className="mb-8 text-center md:text-left">
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">Selected Showcase</span>
                <h2 className="text-2xl md:text-3xl font-black text-white mt-1 tracking-tight">
                    Proyek Unggulan
                </h2>
            </div>

            <div className="space-y-8">
                {/* ------------------- PROYEK 1 (ALIGN KIRI) ------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#BE7D42]/80 hover:bg-[#BE7D42]/60 border border-neutral-800 p-5 md:p-6 rounded-2xl shadow-xl transition-all duration-500 hover:border-amber-400">
                    {/* Gambar Selalu Tampil di Kiri (Col 5) */}
                    <div className="md:col-span-5 relative group overflow-hidden rounded-xl border border-neutral-800 h-48 md:h-52 w-full bg-neutral-950">
                        <img 
                            src={project1.image} 
                            alt={project1.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Informasi & Penjelasan (Col 7) */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                        <div>
                            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">01 / Featured Project</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mt-0.5">{project1.title}</h3>
                            <p className="text-white text-xs md:text-sm font-medium">{project1.subtitle}</p>
                        </div>

                        {/* Tombol Toggle Penjelasan Singkat */}
                        <div className="pt-1">
                            <button
                                onClick={() => toggleExpand('p1')}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-stone-900 hover:bg-amber-400 text-amber-400 hover:text-black text-xs font-bold rounded-xl border border-amber-400/30 transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                <span>{expandedProject.p1 ? 'Sembunyikan Info' : 'Load More Info'}</span>
                                <svg 
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedProject.p1 ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Penjelasan Singkat (Muncul Saat State True) */}
                        <div className={`transition-all duration-500 overflow-hidden ${expandedProject.p1 ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                            <div className="p-3.5 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-2.5 text-xs text-neutral-300">
                                <div>
                                    <span className="font-bold text-white block mb-0.5">Deskripsi Singkat:</span>
                                    <p className="leading-relaxed">{project1.shortDesc}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80">
                                    <div>
                                        <span className="font-bold text-amber-400 block text-[11px]">Bahasa & Stack:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {project1.stack.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-neutral-800 text-neutral-200 text-[10px] rounded border border-neutral-700 font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-amber-400 block text-[11px]">Peran / Kontribusi:</span>
                                        <span className="text-neutral-200 font-medium block mt-0.5 text-xs">{project1.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------- PROYEK 2 (ALIGN KANAN) ------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#BE7D42]/80 hover:bg-[#BE7D42]/60 border border-neutral-800 p-5 md:p-6 rounded-2xl shadow-xl transition-all duration-500 hover:border-amber-400">
                    {/* Informasi & Penjelasan (Col 7 - Tampil di Kiri pada Desktop) */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-3 order-2 md:order-1">
                        <div>
                            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">02 / Featured Project</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mt-0.5">{project2.title}</h3>
                            <p className="text-white text-xs md:text-sm font-medium">{project2.subtitle}</p>
                        </div>

                        {/* Tombol Toggle Penjelasan Singkat */}
                        <div className="pt-1">
                            <button
                                onClick={() => toggleExpand('p2')}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-stone-900/90 hover:bg-amber-400 text-amber-400 hover:text-black text-xs font-bold rounded-xl border border-amber-400/30 transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                <span>{expandedProject.p2 ? 'Sembunyikan Info' : 'Load More Info'}</span>
                                <svg 
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedProject.p2 ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Penjelasan Singkat (Muncul Saat State True) */}
                        <div className={`transition-all duration-500 overflow-hidden ${expandedProject.p2 ? 'max-h-96 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                            <div className="p-3.5 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-2.5 text-xs text-neutral-300">
                                <div>
                                    <span className="font-bold text-white block mb-0.5">Deskripsi Singkat:</span>
                                    <p className="leading-relaxed">{project2.shortDesc}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80">
                                    <div>
                                        <span className="font-bold text-amber-400 block text-[11px]">Bahasa & Stack:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {project2.stack.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-neutral-800 text-neutral-200 text-[10px] rounded border border-neutral-700 font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-amber-400 block text-[11px]">Peran / Kontribusi:</span>
                                        <span className="text-neutral-200 font-medium block mt-0.5 text-xs">{project2.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gambar Selalu Tampil di Kanan (Col 5 - Tampil di Kanan pada Desktop) */}
                    <div className="md:col-span-5 relative group overflow-hidden rounded-xl border border-neutral-800 h-48 md:h-52 w-full bg-neutral-950 order-1 md:order-2">
                        <img 
                            src={project2.image} 
                            alt={project2.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
                    </div>
                </div>
            </div>

            {/* ------------------- TOMBOL "LOAD MORE" UTAMA MENUJU HALAMAN PROYEK ------------------- */}
            <div className="mt-10 flex justify-center">
                <a
                    href="/projects"
                    onClick={(e) => {
                        if (onNavigateToProjects) {
                            e.preventDefault();
                            onNavigateToProjects();
                        }
                    }}
                    className="
                        group relative inline-flex items-center gap-2.5 px-6 py-3 
                        bg-neutral-900 hover:bg-amber-400 text-amber-400 hover:text-neutral-950 
                        font-bold text-xs tracking-wider uppercase rounded-xl 
                        border border-amber-400/40 hover:border-amber-400 
                        shadow-xl transition-all duration-300 ease-out 
                        hover:-translate-y-0.5 hover:shadow-amber-400/20 active:translate-y-0
                    "
                >
                    <span>Load More Projects</span>
                    <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}