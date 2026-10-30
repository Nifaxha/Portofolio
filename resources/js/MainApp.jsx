import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function MainApp(props) {
    return (
        <div className="min-h-screen bg-canvas text-ink">
            <Header nama={props.nama} />
            <main className="wrap">
                <Hero profile={props} />
                <Projects projects={props.proyek} />
                <About profile={props} />
                <Contact profile={props} />
            </main>
        </div>
    );
}
