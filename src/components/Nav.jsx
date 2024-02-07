import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../sass/index.module.sass";

const Nav = () => {
    return (
        <div className={classes.nav}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/post">Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;