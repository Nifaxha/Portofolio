import React from 'react';

export default function Contact() {
    // Array data kontak beserta jalur gambar default & hover
    const contactLinks = [
        {
            name: 'Email',
            href: 'mailto:emailmu@example.com',
            imgDefault: '/assets/Btn-Normal-Email.png',
            imgHover: '/assets/Btn-Hover-Email.png',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/Nifaxha',
            imgDefault: '/assets/Btn-Normal-Github.png',
            imgHover: '/assets/Btn-Hover-Github.png',
        },
    ];

    return (
        <section id="kontak" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 border-t border-white scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-orange-400 mb-4 tracking-tight">Kontak</h2>
            <p className="text-white text-sm md:text-base mb-8">
                Punya proyek atau lowongan? Kirim pesan melalui salah satu kanal ini:
            </p>

            {/* Container Tombol Kontak Gambar */}
            <div className="flex flex-wrap gap-6 items-center">
                {contactLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
                    >
                        {/* Gambar 1: Kondisi Normal (Before Hover) */}
                        <img
                            src={item.imgDefault}
                            alt={item.name}
                            className="h-16 w-auto object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                        />

                        {/* Gambar 2: Kondisi Hover (Ditumpuk di atasnya dengan absolute) */}
                        <img
                            src={item.imgHover}
                            alt={`${item.name} Hover`}
                            className="absolute inset-0 h-16 w-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}