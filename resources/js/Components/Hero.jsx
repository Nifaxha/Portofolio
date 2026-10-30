export default function Hero({ profile }) {
    const baris = "block overflow-hidden pb-[.06em]";
    const isi = "inline-block animate-naik motion-reduce:animate-none";

    return (
        <section
            aria-labelledby="judul-utama"
            className="pb-[clamp(3rem,7vw,5rem)] pt-[clamp(3rem,10vw,8rem)]"
        >
            <h1
                id="judul-utama"
                className="font-display text-[clamp(3.4rem,13vw,8rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
            >
                <span className={baris}>
                    <span className={isi}>{profile.nama}</span>
                </span>
                <span className={baris}>
                    <span
                        className={`${isi} text-[.52em] font-normal tracking-[-0.02em] text-accent`}
                        style={{ animationDelay: ".12s" }}
                    >
                        {profile.peran}
                    </span>
                </span>
            </h1>
            <p className="mt-8 max-w-[34rem] text-[clamp(1.15rem,2vw,1.4rem)] leading-normal">
                {profile.intro}
            </p>
            <p className="mt-6 flex items-center gap-2.5 text-[.98rem] text-muted">
                <span
                    className="size-2.5 flex-none rounded-full bg-[#1fa463]"
                    aria-hidden="true"
                />
                {profile.status}
            </p>
        </section>
    );
}
