import React from 'react';
import '../App.css';
import NavBar from "./NavBar";

function DidYouKnow() {
    return (
        <div className="DidYouKnow">
            <NavBar />
            <p>Did you know that this is the development version of the website?</p>
        </div>
    );
}

export default DidYouKnow;
