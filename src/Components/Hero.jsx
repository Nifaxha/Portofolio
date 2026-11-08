import React from 'react';

export default function Hero({ profile }) {
    const heroImage = profile?.foto || '/assets/hero-image.png';

    return (
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* 1. Sisi Kiri: Teks Perkenalan (Col 7) */}
                <div className="md:col-span-7 space-y-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-white tracking-tight text-white leading-none">
                        {profile?.nama || 'Dwi Haris Riza Darmawan'}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500/90 tracking-tight">
                        {profile?.peran || 'Game Developer & Web Developer'}
                    </h2>
                    <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
                        {profile?.intro || 'Aku membuat aplikasi web yang cepat dan mudah dipakai. Di bawah ini beberapa proyek yang pernah aku kerjakan.'}
                    </p>

                    {profile?.status && (
                        <div className="pt-2">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/90 border border-amber-500/50 text-neutral-950 text-xs font-bold shadow-sm">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                                <span>{profile.status}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* 2. Sisi Kanan: Foto Profil Bergaya Frame & Subtle Tilt (Col 5) */}
                <div className="md:col-span-5 flex justify-center md:justify-end">
                    <div className="relative group w-full max-w-sm sm:max-w-md">
                        
                        {/* Aksen Bayangan Belakang (Background Accent Glow) */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600 to-amber-800 rounded-[28px] blur-sm opacity-30 group-hover:opacity-60 transition duration-500" />

                        {/* Pembungkus Utama Foto */}
                        <div className="relative overflow-hidden rounded-2xl border-4 border-[#B27039]/80 bg-[#F2E3C6] shadow-2xl transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">
                            <img 
                                src={heroImage} 
                                alt={profile?.nama || 'Foto Profil'} 
                                className="w-full h-auto aspect-[4/3] object-cover object-center"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}