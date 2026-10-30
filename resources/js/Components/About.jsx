export default function About({ profile }) {
    return (
        <section
            id="tentang"
            aria-labelledby="h-tentang"
            className="py-[clamp(3.5rem,9vw,7rem)]"
        >
            <h2
                id="h-tentang"
                className="font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-none tracking-[-0.03em]"
            >
                Tentang
            </h2>
            <div className="mt-8 grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
                <div className="grid max-w-[38rem] content-start gap-[1.1rem]">
                    {profile.tentang.map((paragraf) => (
                        <p key={paragraf}>{paragraf}</p>
                    ))}
                </div>
                <div className="grid content-start gap-6">
                    {profile.keahlian.map((g) => (
                        <div key={g.grup}>
                            <h3 className="mb-2 font-display text-[1.1rem] font-semibold tracking-[-0.01em]">
                                {g.grup}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {g.daftar.map((d) => (
                                    <li
                                        key={d}
                                        className="rounded-md border border-line bg-paper px-3 py-0.5 text-[.95rem]"
                                    >
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
