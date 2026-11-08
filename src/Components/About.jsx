import React, { useState } from 'react';

export default function About({ profile }) {
    const tentang = profile?.tentang || [];
    const keahlian = profile?.keahlian || [];

    // State untuk mengontrol status ekspansi (default: false -> kartu di tengah)
    const [isExpanded, setIsExpanded] = useState(false);

    const groupIconMap = {
        'Language': '/assets/skills/title-language.png',
        'Framework': '/assets/skills/title-framework.png',
        'Platform': '/assets/skills/title-platform.png',
    };

    // Pemetaan langsung ke nama berkas fisik di public/assets/skills/
    const skillIconMap = {
        'JavaScript': '/assets/skills/Javascript.png',
        'Python': '/assets/skills/Python.png',
        'HTML & CSS': '/assets/skills/HTML %26 CSS.png',
        'C#': '/assets/skills/C%23.png',
        'React': '/assets/skills/React.png',
        'Laravel': '/assets/skills/Laravel.png',
        'Tailwind CSS': '/assets/skills/Tailwind CSS.png',
        'Git & GitHub': '/assets/skills/Git %26 GitHub.png',
        'MySQL': '/assets/skills/MySQL.png',
        'Unity': '/assets/skills/Unity.png',
    };

    return (
        <section 
            id="tentang" 
            className={`max-w-[1440px] mx-auto px-6 sm:px-10 scroll-mt-20 overflow-hidden transition-all duration-500 ${
                isExpanded ? 'py-16' : 'py-10'
            }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start transition-all duration-700 ease-in-out">
                
                {/* 1. Pembungkus Deskripsi Teks + Judul "Tentang" */}
                <div 
                    className={`
                        transition-all duration-500 ease-in-out relative
                        ${isExpanded 
                            ? 'md:col-span-7 translate-x-0' 
                            : 'md:col-span-12 md:max-w-2xl mx-auto group'
                        }
                    `}
                >
                    {/* Kartu Karton/Kertas "Tentang" */}
                    <div className={`
                        p-8 sm:p-10 md:p-12 bg-[#F2E3C6] border-[14px] border-[#B27039] rounded-[36px] shadow-lg space-y-4 text-neutral-900 font-medium text-sm md:text-base leading-relaxed
                        transition-transform duration-300 ease-out
                        ${!isExpanded ? 'group-hover:-translate-x-6 sm:group-hover:-translate-x-8' : ''}
                    `}>
                        <h2 className="text-3xl md:text-4xl font-black text-neutral-950 mb-4 tracking-tight">
                            Tentang
                        </h2>

                        {tentang.map((paragraf, index) => (
                            <p key={index}>{paragraf}</p>
                        ))}
                    </div>

                    {/* Tombol "Load More" + Panah */}
                    {!isExpanded && (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="
                                absolute right-[-100px] sm:right-[-120px] top-1/2 -translate-y-1/2 
                                flex items-center gap-2 px-4 py-2.5 
                                bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 
                                border border-amber-400/40 rounded-xl shadow-2xl
                                opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4
                                transition-all duration-300 ease-out cursor-pointer z-20
                            "
                            title="Tampilkan Keahlian"
                        >
                            <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">Load More</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* 2. List Keahlian */}
                {isExpanded && (
                    <div className="md:col-span-5 space-y-6 animate-fadeIn transition-all duration-500">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Keahlian & Stack</span>
                            <button 
                                onClick={() => setIsExpanded(false)} 
                                className="text-xs text-neutral-400 hover:text-white underline transition cursor-pointer"
                            >
                                Sembunyikan
                            </button>
                        </div>

                        {keahlian.map((item, idx) => {
                            const groupIconPath = groupIconMap[item.grup];

                            return (
                                <div key={idx} className="space-y-3">
                                    {groupIconPath ? (
                                        <img 
                                            src={groupIconPath} 
                                            alt={item.grup} 
                                            className="h-10 w-auto object-contain ml-5"
                                        />
                                    ) : (
                                        <h3 className="font-bold text-black dark:text-white text-sm tracking-wider uppercase ml-5">
                                            {item.grup}
                                        </h3>
                                    )}

                                    <div className="flex flex-wrap gap-3 items-center">
                                        {item.daftar?.map((skill, sIdx) => {
                                            const iconPath = skillIconMap[skill];
                                            return (
                                                <div 
                                                    key={sIdx} 
                                                    className="transition-transform duration-300 hover:scale-110"
                                                    title={skill}
                                                >
                                                    {iconPath ? (
                                                        <img 
                                                            src={iconPath} 
                                                            alt={skill} 
                                                            className="h-12 w-auto object-contain"
                                                        />
                                                    ) : (
                                                        <span className="px-3 py-1.5 bg-white text-neutral-900 font-bold text-xs rounded-lg border border-neutral-200">
                                                            {skill}
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    );
}