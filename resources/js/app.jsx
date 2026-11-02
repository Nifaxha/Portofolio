import React from 'react';
import { createRoot } from 'react-dom/client';
import MainApp from './MainApp';
import '../css/app.css';

const appEl = document.getElementById('app');

if (appEl) {
    const portfolio = JSON.parse(appEl.dataset.portfolio || '{}');
    const page = appEl.dataset.page || 'home';

    createRoot(appEl).render(
        <React.StrictMode>
            <MainApp portfolio={portfolio} page={page} />
        </React.StrictMode>
    );
}