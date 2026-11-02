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

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-amber-400 selection:text-black">
            <Header activePage="projects" />

            <main className="mmax-w-[1440px] mx-auto px-6 sm:px-10 py-10 md:py-16">
                {/* Header Title Section */}
                <div className="mb-10">
                    <div className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
                        2025 — 2026 / SELECTED WORK
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white">
                        SELECTED <span className="bg-amber-400 text-neutral-950 px-3 py-1 inline-block rounded-md uppercase">PROJECTS.</span>
                    </h1>
                </div>

                {/* Main Split Layout: Left List + Right Showcase Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Project List (4 Cols) */}
                    <div className="lg:col-span-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-sm">
                        
                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveFilter(cat);
                                        setSelectedIndex(0);
                                    }}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                                        activeFilter === cat
                                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-black'
                                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
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
                                                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-white shadow-md'
                                                : 'bg-transparent border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between text-[11px] font-mono opacity-70">
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
                        <div className="lg:col-span-8 bg-neutral-100/80 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 md:p-8 shadow-lg">
                            
                            {/* Top Metadata Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-amber-400 text-black font-bold text-xs rounded-full uppercase">
                                        {activeProject.peran || 'Developer'}
                                    </span>
                                    <span className="px-3 py-1 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 font-mono text-xs rounded-full">
                                        {activeProject.kategori}
                                    </span>
                                </div>
                                <div className="text-xs font-mono text-neutral-500">
                                    0{selectedIndex + 1} / 0{filteredProjects.length}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                                
                                {/* Info & Descriptions */}
                                <div className="xl:col-span-7 space-y-6">
                                    <div>
                                        <div className="text-xs font-mono text-neutral-500 mb-1">
                                            {activeProject.tahun} / {activeProject.kategori}
                                        </div>
                                        <h2 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white uppercase mb-3">
                                            {activeProject.judul}
                                        </h2>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
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
                                                    className="px-2.5 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-xs rounded-lg"
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
                                        <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 list-disc list-inside leading-relaxed">
                                            <li>{activeProject.deskripsi}</li>
                                            <li>Mengimplementasikan fitur utama menggunakan {activeProject.teknologi?.slice(0, 2).join(' dan ')}.</li>
                                            <li>Fokus pada performa, keterbacaan kode, dan antarmuka pengguna yang responsif.</li>
                                        </ul>
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {activeProject.repo && (
                                            <a
                                                href={activeProject.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-xs rounded-xl transition flex items-center gap-2"
                                            >
                                                <span>GitHub Repository</span>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        )}
                                        {activeProject.demo && (
                                            <a
                                                href={activeProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-500 text-neutral-950 font-bold text-xs rounded-xl transition flex items-center gap-2"
                                            >
                                                <span>Live Demo</span>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Mockup Window Frame (Kanan Detail) */}
                                <div className="xl:col-span-5">
                                    <div className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden">
                                        
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

                                        {/* Mockup Body Content */}
                                        <div className="p-6 text-white min-h-[260px] flex flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                                                    PREVIEW CANVAS
                                                </span>
                                                <h3 className="text-2xl font-black uppercase text-neutral-100">
                                                    {activeProject.judul}
                                                </h3>
                                            </div>

                                            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-sm">
                                                <div className="text-[11px] font-mono text-neutral-400 mb-1">
                                                    CATEGORY: {activeProject.kategori}
                                                </div>
                                                <div className="text-xs text-neutral-300 font-medium">
                                                    {activeProject.peran}
                                                </div>
                                            </div>
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