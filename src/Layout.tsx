import NavBar from "./components/Navbar.tsx";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}