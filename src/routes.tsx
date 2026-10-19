import {RouteObject} from 'react-router-dom';
import Layout from "./components/layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Gallery from "./pages/gallery/Gallery.tsx";
import Shop from "./pages/shop/Shop.tsx";
import DeviceCheckWrapper from "./components/DeviceCheckWrapper.tsx";
import MobileNotSupported from "./pages/MobileNotSupported.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <DeviceCheckWrapper
                largeScreenComponent={<Layout/>}
                smallScreenComponent={<MobileNotSupported/>}
                threshold={1024} // Optional: adjust threshold
            />
        ),
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