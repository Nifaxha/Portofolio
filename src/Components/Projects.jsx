import { useMemo, useRef, useState } from 'react';
import ProjectDialog from './ProjectDialog';

export default function Projects({ projects }) {
    const [aktif, setAktif] = useState('Semua');
    const [terpilih, setTerpilih] = useState(null);
    const pemicu = useRef(null);

    const kategori = useMemo(() => ['Semua', ...new Set(projects.map((p) => p.kategori))], [projects]);
    const tampil = aktif === 'Semua' ? projects : projects.filter((p) => p.kategori === aktif);

    function buka(project, event) {
        pemicu.current = event.currentTarget;
        setTerpilih(project);
    }

    function tutup() {
        setTerpilih(null);
        pemicu.current?.focus();
    }

    return (
        <section id="proyek" aria-labelledby="h-proyek" className="py-[clamp(3.5rem,9vw,7rem)]">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
                <h2 id="h-proyek" className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-none tracking-[-0.03em]">
                    Proyek
                </h2>

                {/* Filter hanya muncul kalau ada lebih dari satu kategori */}
                {kategori.length > 2 && (
                    <div role="group" aria-label="Filter kategori" className="flex flex-wrap gap-2">
                        {kategori.map((k) => (
                            <button
                                key={k}
                                type="button"
                                aria-pressed={k === aktif}
                                onClick={() => setAktif(k)}
                                className="cursor-pointer rounded-full border-[1.5px] border-ink px-4 py-1 text-[.95rem] font-medium hover:bg-paper aria-pressed:bg-ink aria-pressed:text-canvas"
                            >
                                {k}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <ul className="border-t-2 border-ink">
                {tampil.length === 0 && <li className="py-8 text-muted">Belum ada proyek di kategori ini.</li>}
                {tampil.map((p) => (
                    <li key={p.judul} className="border-b border-line">
                        <button
                            type="button"
                            onClick={(e) => buka(p, e)}
                            className="group grid w-full cursor-pointer grid-cols-1 items-baseline gap-x-8 gap-y-1 px-1 py-6 text-left transition-[background-color,color,padding] duration-200 hover:bg-accent hover:px-3 hover:text-white focus-visible:bg-accent focus-visible:px-3 focus-visible:text-white focus-visible:-outline-offset-3 focus-visible:outline-ink motion-reduce:transition-none sm:grid-cols-[1fr_auto] sm:px-4 sm:hover:px-7 sm:focus-visible:px-7"
                        >
                            <span className="font-display text-[clamp(1.7rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                                {p.judul}
                            </span>
                            <span className="whitespace-nowrap text-[.98rem] text-muted group-hover:text-white/80 group-focus-visible:text-white/80 sm:text-right">
                                {p.kategori}, {p.tahun}
                            </span>
                            <span className="max-w-xl text-muted group-hover:text-white/80 group-focus-visible:text-white/80">
                                {p.ringkas}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

            <ProjectDialog project={terpilih} onClose={tutup} />
        </section>
    );
}
