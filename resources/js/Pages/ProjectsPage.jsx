import React, { useState } from 'react';
import Header from '../Components/Header';

export default function ProjectsPage({ portfolio }) {
    const projects = portfolio?.projects || [];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('Semua');

    const categories = ['Semua', ...new Set(projects.map(p => p.kategori))];

    const filteredProjects = activeFilter === 'Semua' 
        ? projects 
        : projects.filter(p => p.kategori === activeFilter);

    const activeProject = filteredProjects[selectedIndex] || filteredProjects[0] || {};

    // Aset tombol aman dengan fallback
    const itchAssets = {
        normal: '/assets/Btn-Normal-Itch.io.png',
        hover: '/assets/Btn-Hover-Itch.io.png',
    };

    const githubAssets = {
    normal: '/assets/Btn-Normal-Github.png', // Ganti dengan file gambar tombol GitHub Anda
    hover: '/assets/Btn-Hover-Github.png',
    };

    const buttonAssets = {
        'itch.io': itchAssets,
        'itch': itchAssets,
        'demo': itchAssets,
        'github': githubAssets, // Fallback aman agar buttonAssets.github tidak undefined
    };

    // Deteksi gambar proyek (mendukung properti `gambar` maupun `image`)
    const projectImage = activeProject.gambar || activeProject.image;

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-neutral-900 dark:text-neutral-100 font-sans selection:bg-amber-400 selection:text-black relative"
            style={{ backgroundImage: "url('/assets/projects-bg.png')" }}
        >
            {/* Layer Overlay */}
            <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px] -z-10 pointer-events-none" />

            <Header activePage="projects" />

            <main className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 md:py-16 relative z-10">
                {/* Header Title Section */}
                <div className="mb-10">
                    <div className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2">
                        2025 — 2026 / SELECTED WORK
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                        SELECTED <span className="bg-amber-400 text-neutral-950 px-3 py-1 inline-block rounded-md uppercase">PROJECTS.</span>
                    </h1>
                </div>

                {/* Main Split Layout: Left List + Right Showcase Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Project List (4 Cols) */}
                    <div className="lg:col-span-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-xl">
                        
                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-neutral-800">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveFilter(cat);
                                        setSelectedIndex(0);
                                    }}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                                        activeFilter === cat
                                            ? 'bg-amber-400 text-neutral-950 font-bold'
                                            : 'bg-neutral-800/80 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3 px-2">
                            PROJECT LIST ({filteredProjects.length} PROJECTS)
                        </div>

                        {/* List Items */}
                        <div className="space-y-2">
                            {filteredProjects.map((proj, idx) => {
                                const isSelected = filteredProjects[selectedIndex]?.judul === proj.judul;
                                return (
                                    <button
                                        key={proj.judul + idx}
                                        onClick={() => setSelectedIndex(idx)}
                                        className={`w-full text-left p-3.5 rounded-xl transition flex flex-col gap-1 border ${
                                            isSelected
                                                ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md font-bold'
                                                : 'bg-transparent border-transparent hover:bg-neutral-800/60 text-neutral-300'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
                                            <span>0{idx + 1} / {proj.kategori?.toUpperCase()}</span>
                                            <span>{proj.tahun}</span>
                                        </div>
                                        <div className="font-bold text-sm tracking-tight">
                                            {proj.judul}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Detail & Browser Preview (8 Cols) */}
                    {activeProject.judul && (
                        <div className="lg:col-span-8 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl">
                            
                            {/* Top Metadata Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-800">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-amber-400 text-neutral-950 font-bold text-xs rounded-full uppercase">
                                        {activeProject.peran || 'Developer'}
                                    </span>
                                    <span className="px-3 py-1 border border-neutral-700 text-neutral-300 font-mono text-xs rounded-full">
                                        {activeProject.kategori}
                                    </span>
                                </div>
                                <div className="text-xs font-mono text-neutral-400">
                                    0{selectedIndex + 1} / 0{filteredProjects.length}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                                
                                {/* Info & Descriptions */}
                                <div className="xl:col-span-7 space-y-6">
                                    <div>
                                        <div className="text-xs font-mono text-amber-400 mb-1">
                                            {activeProject.tahun} / {activeProject.kategori}
                                        </div>
                                        <h2 className="text-3xl font-black tracking-tight text-white uppercase mb-3">
                                            {activeProject.judul}
                                        </h2>
                                        <p className="text-sm text-neutral-300 leading-relaxed">
                                            {activeProject.ringkas}
                                        </p>
                                    </div>

                                    {/* Tech Stack Pills */}
                                    <div>
                                        <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                                            TEKNOLOGI & STACK
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeProject.teknologi?.map((tech) => (
                                                <span 
                                                    key={tech}
                                                    className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-200 font-mono text-xs rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Detailed Bullet Points */}
                                    <div>
                                        <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                                            DESKRIPSI & PERAN
                                        </div>
                                        <ul className="space-y-2 text-xs text-neutral-300 list-disc list-inside leading-relaxed">
                                            <li>{activeProject.deskripsi}</li>
                                            {activeProject.teknologi && activeProject.teknologi.length > 0 && (
                                                <li>Mengimplementasikan fitur utama menggunakan {activeProject.teknologi.slice(0, 2).join(' dan ')}.</li>
                                            )}
                                            <li>Fokus pada performa, keterbacaan kode, dan antarmuka pengguna yang responsif.</li>
                                            <li>Bisa membaca file dokumen seperti pdf dan image</li>
                                            <li>Bisa memberikan link video pembelajaran yang mengambil dari youtube</li>
                                            <li>Bisa membedakan mana siswa dan mana yang bukan</li>
                                        </ul>
                                    </div>

                                    {/* Action Links dengan Tombol Gambar */}
                                    <div className="flex flex-wrap gap-4 pt-2 items-center">
                                        {/* 1. Jika data proyek berbentuk array links */}
                                        {Array.isArray(activeProject.links) && activeProject.links.map((link, idx) => {
                                            const asset = buttonAssets[link.type] || buttonAssets['itch.io'];
                                            return (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative inline-block transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                                >
                                                    <img
                                                        src={asset?.normal || itchAssets.normal} 
                                                        alt={link.type || 'link'}
                                                        className="h-12 w-auto object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={asset?.hover || itchAssets.hover}
                                                        alt={`${link.type || 'link'} hover`}
                                                        className="absolute inset-0 h-12 w-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                                    />
                                                </a>
                                            );
                                        })}

                                        {/* 2. Fallback Repo (GitHub) */}
                                        {!activeProject.links && activeProject.repo && (
                                            <a
                                                href={activeProject.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative inline-block transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                            >
                                                <img
                                                    src={buttonAssets.github?.normal || itchAssets.normal} 
                                                    alt="GitHub Repository"
                                                    className="h-12 w-auto object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src={buttonAssets.github?.hover || itchAssets.hover}
                                                    alt="GitHub Repository Hover"
                                                    className="absolute inset-0 h-12 w-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </a>
                                        )}

                                        {/* 3. Fallback Demo / itch.io */}
                                        {!activeProject.links && (activeProject.demo || activeProject['itch.io']) && (
                                            <a
                                                href={activeProject.demo || activeProject['itch.io']}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative inline-block transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                            >
                                                <img
                                                    src={buttonAssets['itch.io']?.normal || itchAssets.normal} 
                                                    alt="Live Demo"
                                                    className="h-12 w-auto object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src={buttonAssets['itch.io']?.hover || itchAssets.hover}
                                                    alt="Live Demo Hover"
                                                    className="absolute inset-0 h-12 w-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Mockup Window Frame dengan Tampilan Gambar (Kanan Detail) */}
                                <div className="xl:col-span-5">
                                    <div className="rounded-2xl border border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden">
                                        
                                        {/* Mockup Browser Window Header */}
                                        <div className="bg-neutral-900 px-3 py-2 border-b border-neutral-800 flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="flex-1 bg-neutral-950 rounded px-2 py-0.5 text-[10px] font-mono text-neutral-400 truncate text-center">
                                                {activeProject.judul?.toLowerCase().replace(/\s+/g, '-')}.app
                                            </div>
                                        </div>

                                        {/* Mockup Body Content: Menampilkan Gambar Proyek */}
                                        <div className="relative w-full aspect-[5/3] bg-neutral-950 flex items-center justify-center overflow-hidden group">
                                            {projectImage ? (
                                                <img 
                                                    src={projectImage} 
                                                    alt={`Preview ${activeProject.judul}`} 
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                /* Fallback jika proyek belum memiliki gambar */
                                                <div className="p-6 text-center space-y-2">
                                                    <span className="font-mono text-xs text-amber-400 block uppercase tracking-widest">
                                                        NO PREVIEW IMAGE
                                                    </span>
                                                    <div className="text-xl font-bold text-neutral-300 uppercase">
                                                        {activeProject.judul}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Gradient Overlay tipis di bagian bawah gambar */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}