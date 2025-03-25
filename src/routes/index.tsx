// src/app/routes.tsx
import {RouteObject} from 'react-router-dom';
import AppLayout from "../app/AppLayout.tsx";
import Home from "../app/Home.tsx";
import About from "../app/About.tsx";
import Gallery from "../app/Gallery.tsx";
import Shop from "../app/Shop.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {path: '/home', element: <Home/>},
            {path: '/about', element: <About/>},
            {path: '/gallery', element: <Gallery/>},
            {path: '/shop', element: <Shop/>},
        ],
    },
];

export default routes;