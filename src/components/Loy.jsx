import React from 'react';
import Nav from "./Nav.jsx";
import {Outlet} from "react-router-dom";
import classes from "../sass/index.module.sass";

const Loy = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <footer>
                <h3>John</h3>
            </footer>
        </div>
    );
};

export default Loy;