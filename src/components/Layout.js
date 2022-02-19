import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Layout() {

    return (
        <div className="App">
            <header className='App-header'>
                <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="competitions">Лиги</NavLink>
                <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="teams">Команды</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;