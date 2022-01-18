import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="menu">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    )
}

export default Navigation