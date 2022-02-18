import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Layout() {

    return (
        <div className="App">
            <header className='App-header'>
                <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="competitions">Competitions</NavLink>
                <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="teams">Teams</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;