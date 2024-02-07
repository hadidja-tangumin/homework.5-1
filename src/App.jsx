import React from 'react';
import {Routes, Route} from "react-router-dom";
import Loy from "./components/Loy.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Post from "./pages/Post.jsx";
import Create from "./pages/Create.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Loy/>}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/create" element={<Create/>}/>
            </Route>
        </Routes>
    );
};

export default App;