import {Navigate, RouteObject} from 'react-router-dom';
import Layout from "./pages/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Gallery from "./pages/gallery/Gallery.tsx";
import Shop from "./pages/shop/Shop.tsx";
import DeviceCheckWrapper from "./components/DeviceCheckWrapper.tsx";
import MobileNotSupported from "./pages/MobileNotSupported.tsx";

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
            {path: 'home', element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'gallery', element: <Gallery/>},
            {path: 'shop', element: <Shop/>},
            {path: '*', element: <Navigate to="/" replace/>} // Redirects unmatched paths to home
        ],
    },
];

export default routes;