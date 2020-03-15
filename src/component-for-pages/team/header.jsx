import React from 'react';
import thrivelogo from '../tools/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div class="header">
            <div class="header-logo-div">
                <a href="https://thriveagric.com/">
                    <img src={thrivelogo} alt="thriveagric logo" class="header-logo"/>
                </a>
            </div>
            <div class="header-nav">
                <ul class="header-nav-list">
                    <Link>
                        <li class="nav-list">
                             <a href="https://thriveagric.com/" className="nav-list-text">Home</a>
                        </li>
                    </Link>
                    <Link>
                        <li class="nav-list">
                            <a href="https://thriveagric.com/#howitworks" className="nav-list-text">Our Process</a>
                        </li>
                    </Link>
                    <Link>
                        <li class="nav-list">
                            <a href="https://thriveagric.com/#our-farms" className="nav-list-text">Our Farms</a>
                        </li>
                    </Link>
                    <Link to="/about" >
                        <li class="nav-list">
                            <a href="https://thriveagric.com/about" className="nav-list-text">About Us</a>
                        </li>
                    </Link>
                    <Link to="/team">
                        <li class="nav-list">
                            <a href="https://thriveagric.com/team" className="nav-list-text special-nav-list-text">Our Team</a>
                        </li>
                    </Link>
                    <Link>
                        <li class="nav-list">
                            <a href="https://thriveagric.com/sign/signin" className="nav-list-text">Sign in</a>
                        </li>
                    </Link>
                    <Link>
                         <li class="nav-list">
                             <a href="https://thriveagric.com/sign/signup" className="nav-list-text nav-list-btn">
                                 <button className="sign-up-btn">Sign Up</button>
                             </a>
                         </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
export default Header;