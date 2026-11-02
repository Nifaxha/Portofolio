import React from 'react';

export default function About({ profile }) {
    const tentang = profile?.tentang || [];
    const keahlian = profile?.keahlian || [];

    const getSkillIcon = (skillName) => {
        const fileName = skillName
            .toLowerCase()
            .replace(/ & /g, '-')
            .replace(/\s+/g, '-')
            .replace(/#/g, 'sharp');
        return `/assets/skills/${fileName}.png`;
    };

    return (
        // Ganti class pembungkus utama di About:
<section id="tentang" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8 tracking-tight">Tentang</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Deskripsi Teks */}
                <div className="md:col-span-7 space-y-4 text-black text-sm md:text-base leading-relaxed">
                    {tentang.map((paragraf, index) => (
                        <p key={index}>{paragraf}</p>
                    ))}
                </div>

                {/* List Keahlian dengan Berkas Gambar PNG */}
                <div className="md:col-span-5 space-y-6">
                    {keahlian.map((item, idx) => (
                        <div key={idx} className="space-y-3">
                            <h3 className="font-bold text-black dark:text-white text-sm tracking-wider uppercase">{item.grup}</h3>
                            <div className="flex flex-wrap gap-3 items-center">
                                {item.daftar?.map((skill, sIdx) => (
                                    <div 
                                        key={sIdx} 
                                        className="transition-transform duration-300 hover:scale-110"
                                        title={skill}
                                    >
                                        <img 
                                            src={getSkillIcon(skill)} 
                                            alt={skill} 
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}