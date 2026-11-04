import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import HomeProjects from './Components/HomeProjects';
import ProjectsPage from './Pages/ProjectsPage';

export default function MainApp({ portfolio, page = 'home' }) {
    const isProjectsPage = page === 'projects' || window.location.pathname.startsWith('/projects');

    if (isProjectsPage) {
        return <ProjectsPage portfolio={portfolio} />;
    }

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-neutral-900 font-sans relative"
            style={{ backgroundImage: "url('/assets/home-bg.png')" }} // Ganti dengan jalur berkas gambar latar milikmu
        >
            {/* Layer Overlay (Opsional): Gunakan jika latar gambar terlalu ramai agar teks tetap mudah dibaca */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10 pointer-events-none" />

            <Header activePage="home" />
            <main className="relative z-10">
                <Hero profile={portfolio?.profile} />
                <About profile={portfolio?.profile} />
                <HomeProjects />
                <Contact profile={portfolio?.profile} />
            </main>
        </div>
    );
}