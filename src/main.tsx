import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from "./routes.tsx";

const router = createBrowserRouter(routes);

// Pages render their own <meta name="description">; drop the static fallback from index.html to avoid duplicates.
document.querySelector('meta[name="description"]')?.remove();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);