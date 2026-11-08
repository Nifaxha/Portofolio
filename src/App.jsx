import React from "react";
import MainApp from "./MainApp";
import { portfolioData } from "./data/portofolioData";

export default function App() {
  return <MainApp portfolio={portfolioData} />;
}
