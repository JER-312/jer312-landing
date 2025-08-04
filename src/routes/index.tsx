import {Navigate, RouteObject} from 'react-router-dom';
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
            {index: true, element: <Home/>}, // Makes Home the default route
            {path: 'home', element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'gallery', element: <Gallery/>},
            {path: 'shop', element: <Shop/>},
            {path: '*', element: <Navigate to="/" replace/>} // Redirects unmatched paths to home
        ],
    },
];

export default routes;