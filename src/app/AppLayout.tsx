import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default AppLayout;