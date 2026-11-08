import { useEffect, useRef } from "react";

const tombolLink =
    "rounded-full border-[1.5px] border-ink bg-ink px-4 py-2 font-semibold text-canvas hover:border-accent hover:bg-accent hover:text-white";

export default function ProjectDialog({ project, onClose }) {
    const ref = useRef(null);

    // Elemen <dialog> bawaan browser: Esc untuk menutup dan fokus terkunci sudah ditangani browser.
    useEffect(() => {
        const dialog = ref.current;
        if (project && !dialog.open) dialog.showModal();
    }, [project]);

    const inisial = project
        ? project.judul
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w.charAt(0))
              .join("")
        : "";

    return (
        <dialog
            ref={ref}
            onClose={onClose}
            onClick={(e) => e.target === ref.current && ref.current.close()}
            aria-labelledby="d-judul"
            className="relative m-auto max-h-[calc(100dvh-2rem)] w-[min(46rem,calc(100%-2rem))] overflow-auto rounded-[14px] bg-paper text-ink open:animate-muncul motion-reduce:animate-none backdrop:bg-ink/60"
        >
            {project && (
                <article>
                    <button
                        type="button"
                        onClick={() => ref.current.close()}
                        aria-label="Tutup detail proyek"
                        className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border-[1.5px] border-ink bg-paper px-3.5 py-1 font-semibold hover:bg-ink hover:text-paper"
                    >
                        Tutup
                    </button>

                    <div className="grid aspect-[16/8] place-items-center overflow-hidden bg-accent">
                        {project.gambar ? (
                            <img
                                src={project.gambar}
                                alt={`Tangkapan layar ${project.judul}`}
                                loading="lazy"
                                className="block size-full object-cover"
                            />
                        ) : (
                            <span
                                aria-hidden="true"
                                className="font-display text-[clamp(4rem,14vw,8rem)] font-extrabold tracking-[-0.05em] text-white"
                            >
                                {inisial}
                            </span>
                        )}
                    </div>

                    <div className="grid gap-4 p-7">
                        <h3
                            id="d-judul"
                            className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-extrabold leading-none tracking-[-0.03em]"
                        >
                            {project.judul}
                        </h3>
                        <p className="text-muted">
                            {project.peran}, {project.tahun}
                        </p>
                        <p>{project.deskripsi}</p>
                        <ul className="flex flex-wrap gap-2">
                            {project.teknologi.map((t) => (
                                <li
                                    key={t}
                                    className="rounded-md border border-line bg-canvas px-3 py-0.5 text-[.95rem]"
                                >
                                    {t}
                                </li>
                            ))}
                        </ul>
                        {(project.demo || project.repo) && (
                            <p className="flex flex-wrap gap-3">
                                {project.demo && (
                                    <a
                                        className={tombolLink}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Buka demo
                                    </a>
                                )}
                                {project.repo && (
                                    <a
                                        className={
                                            project.demo
                                                ? `${tombolLink} !bg-transparent !text-ink hover:!bg-accent hover:!text-white`
                                                : tombolLink
                                        }
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat kode
                                    </a>
                                )}
                            </p>
                        )}
                    </div>
                </article>
            )}
        </dialog>
    );
}
