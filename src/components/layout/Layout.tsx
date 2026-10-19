import Header from "./Header.tsx";
import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "./Footer.tsx";

function Layout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
}

export default Layout;