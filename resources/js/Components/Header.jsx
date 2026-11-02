import React from 'react';

export default function Header({ activePage = 'home' }) {
    return (
        <header className="sticky top-0 z-50 bg-[#472F15]/90 backdrop-blur-md border-b border-neutral-800 text-white">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 font-black text-xl tracking-wider text-amber-400">
                    <span className="bg-amber-400 text-black px-2 py-0.5 rounded text-sm font-mono">DHRD</span>
                    <span>Porto.</span>
                </a>

                <nav className="flex items-center gap-6 font-medium text-sm text-amber-400">
                    <a href="/" className={`hover:text-white transition ${activePage === 'home' ? 'text-white font-semibold' : ''}`}>Home</a>
                    <a href="/projects" className={`hover:text-white transition ${activePage === 'projects' ? 'text-white font-semibold' : ''}`}>Proyek</a>
                    <a href="/#tentang" className="hover:text-white transition">Tentang</a>
                    <a href="/#kontak" className="hover:text-white transition">Kontak</a>
                </nav>
            </div>
        </header>
    );
}