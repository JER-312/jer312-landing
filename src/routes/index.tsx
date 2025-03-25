// src/app/routes.tsx
import { RouteObject } from 'react-router-dom';
import App from '../App.tsx';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <h1>Home</h1> },
            { path: '/about', element: <h1>About</h1> },
        ],
    },
];

export default routes;