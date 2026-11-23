import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header({ activePage = "home" }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk scroll halus ke section (#tentang / #kontak)
  const scrollToSection = (id) => {
    // Jika posisi sedang tidak di Home, pindah ke Home dulu baru scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Jika sudah di Home, langsung scroll ke id section
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#472F15]/90 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-black text-xl tracking-wider text-amber-400"
        >
          <span className="bg-amber-400 text-black px-2 py-0.5 rounded text-sm font-mono">
            DHRD
          </span>
          <span>Porto.</span>
        </Link>

        <nav className="flex items-center gap-6 font-medium text-sm text-amber-400">
          <Link
            to="/"
            className={`hover:text-white transition ${activePage === "home" ? "text-white font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`hover:text-white transition ${activePage === "projects" ? "text-white font-semibold" : ""}`}
          >
            Proyek
          </Link>
          <button
            type="button"
            onClick={() => scrollToSection("tentang")}
            className="hover:text-white transition cursor-pointer bg-transparent border-0 font-medium"
          >
            Tentang
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("kontak")}
            className="hover:text-white transition cursor-pointer bg-transparent border-0 font-medium"
          >
            Kontak
          </button>
        </nav>
      </div>
    </header>
  );
}
