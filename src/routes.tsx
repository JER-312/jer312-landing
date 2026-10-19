import {RouteObject} from 'react-router-dom';
import Layout from "./components/layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Gallery from "./pages/gallery/Gallery.tsx";
import Shop from "./pages/shop/Shop.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>}, // Makes Home the default route
            {path: 'about', element: <About/>},
            {path: 'gallery', element: <Gallery/>},
            {path: 'shop', element: <Shop/>},
            {path: '*', element: <NotFoundPage/>}
        ],
    },
];

export default routes;