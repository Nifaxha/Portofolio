// App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import ProjectsPage from "./Pages/ProjectsPage";
import { portofolioData } from "./data/portofolioData";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp portofolio={portofolioData} />} />
        <Route
          path="/projects"
          element={<ProjectsPage portofolio={portofolioData} />}
        />
      </Routes>
    </Router>
  );
}
