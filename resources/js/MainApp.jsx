import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectsPage from './Pages/ProjectsPage';

export default function MainApp({ portfolio, page = 'home' }) {
    const isProjectsPage = page === 'projects' || window.location.pathname.startsWith('/projects');

    if (isProjectsPage) {
        return <ProjectsPage portfolio={portfolio} />;
    }

    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans">
            <Header activePage="home" />
            <main>
                <Hero profile={portfolio?.profile} />
                <About profile={portfolio?.profile} />
                <Contact profile={portfolio?.profile} />
            </main>
        </div>
    );
}