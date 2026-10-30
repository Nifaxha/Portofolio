const link = 'border-b-2 border-transparent py-1 font-medium hover:border-accent';

export default function Header({ nama }) {
    return (
        <header className="sticky top-0 z-10 bg-canvas/90 backdrop-blur">
            <div className="wrap flex items-center justify-between py-4">
                <a href="#" className="font-display text-lg font-extrabold tracking-tight">
                    {nama}
                </a>
                <nav aria-label="Navigasi utama" className="flex gap-4 text-[.95rem] sm:gap-6 sm:text-base">
                    <a className={link} href="#proyek">Proyek</a>
                    <a className={link} href="#tentang">Tentang</a>
                    <a className={link} href="#kontak">Kontak</a>
                </nav>
            </div>
        </header>
    );
}
