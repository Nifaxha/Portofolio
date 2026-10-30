import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./MainApp";

// Data portofolio dikirim dari Laravel (config/portfolio.php) lewat tag <script> di Blade.
const data = JSON.parse(document.getElementById("portfolio-data").textContent);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App {...data} />
    </StrictMode>,
);
