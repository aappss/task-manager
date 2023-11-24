import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const myFunction = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div>
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    {/* <i className="fa fa-bars"></i> */}
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>

            <div style={{paddingLeft: "16px"}}>
                <h2>Responsive Topnav Example</h2>
                <p>Resize the browser window to see how it works.</p>
            </div>
        </div>
    )
}

export default Navbar
