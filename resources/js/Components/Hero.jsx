import React from 'react';

export default function Hero({ profile }) {
    return (
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20 md:py-28">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black mb-4">
                {profile?.nama || 'Dwi Haris Riza Darmawan'}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-orange-400/80 mb-6">
                {profile?.peran || 'Game Developer & Web Developer'}
            </h2>
            <p className="text-black text-base md:text-lg max-w-2xl leading-relaxed mb-6">
                {profile?.intro}
            </p>
            {profile?.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/75 border border-amber-400 text-black text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{profile.status}</span>
                </div>
            )}
        </section>
    );
}