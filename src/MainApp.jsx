// MainApp.jsx
import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HomeProjects from "./Components/HomeProjects";

export default function MainApp({ portofolio }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-neutral-900 font-sans relative"
      style={{ backgroundImage: "url('/assets/home-bg.png')" }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-10 pointer-events-none" />

      <Header activePage="home" />
      <main className="relative z-10">
        <Hero profile={portofolio?.profile} />
        <About profile={portofolio?.profile} />
        <HomeProjects />
        <Contact profile={portofolio?.profile} />
      </main>
    </div>
  );
}
