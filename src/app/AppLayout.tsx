import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";

function AppLayout() {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default AppLayout;