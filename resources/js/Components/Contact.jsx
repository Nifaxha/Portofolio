export default function Contact({ profile }) {
    return (
        <section
            id="kontak"
            aria-labelledby="h-kontak"
            className="border-t-2 border-ink py-[clamp(3.5rem,9vw,7rem)]"
        >
            <h2
                id="h-kontak"
                className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-none tracking-[-0.03em]"
            >
                Mari ngobrol
            </h2>
            <p className="mt-4 max-w-[30rem] text-muted">
                Punya proyek atau lowongan? Kirim pesan lewat salah satu kanal
                ini.
            </p>

            <ul className="mt-8">
                {profile.kontak.map((k) => {
                    const eksternal = /^https?:/.test(k.href);
                    return (
                        <li
                            key={k.label}
                            className="grid items-baseline gap-x-4 border-b border-line py-3 sm:grid-cols-[7rem_1fr]"
                        >
                            <span className="text-muted">{k.label}</span>
                            <a
                                href={k.href}
                                {...(eksternal
                                    ? {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                      }
                                    : {})}
                                className="font-display text-[clamp(1.15rem,3vw,1.6rem)] font-semibold tracking-[-0.02em] underline decoration-2 underline-offset-4 [overflow-wrap:anywhere] hover:text-accent"
                            >
                                {k.teks}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {profile.cv && (
                <a
                    href={profile.cv}
                    download
                    className="mt-8 inline-block rounded-full bg-ink px-5 py-3 font-semibold text-canvas hover:bg-accent hover:text-white"
                >
                    Unduh CV
                </a>
            )}
        </section>
    );
}
