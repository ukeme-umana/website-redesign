import React from 'react';
import thrivelogo from '../tools/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#"><img src={thrivelogo} alt="thriveagric logo" class="header-logo"/></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      {/* <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul> */}
      <ul class="nav navbar-nav navbar-right">
        
        <li><a href="https://thriveagric.com/" className="nav-list-text"> Home</a></li>
        <li><a href="https://thriveagric.com/#howitworks" className="nav-list-text"> Our Process</a></li>
        <li><a href="https://thriveagric.com/#howitworks" className="nav-list-text"> Our Farms</a></li>
        <li><a href="https://thriveagric.com/about" className="nav-list-text /* special-nav-list-text */"> About Us</a></li>
        <li><a href="https://thriveagric.com/team" className="nav-list-text"> Our Team</a></li>
        <li><a href="https://thriveagric.com/sign/signin" className="nav-list-text"> Sign In</a></li>
        <li><a href="https://thriveagric.com/sign/signup" className="nav-list-text nav-list-btn">
                 <button className="sign-up-btn">Sign Up</button>
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    );
}
export default Header;

{/* <div class="header">
            <div class="header-logo-div">
                <a href="https://thriveagric.com/">
                    <img src={thrivelogo} alt="thriveagric logo" class="header-logo"/>
                </a>
            </div>
            <div class="header-nav">
                <ul class="header-nav-list">
                    <Link to="/">
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
                            <a href="https://thriveagric.com/about" className="nav-list-text special-nav-list-text">About Us</a>
                        </li>
                    </Link>
                    <Link to="/team">
                        <li class="nav-list">
                            <a href="https://thriveagric.com/team" className="nav-list-text">Our Team</a>
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
        </div> */}
