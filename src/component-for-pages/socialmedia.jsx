import React from 'react';
import fb from '../tools/Group 37.png';
import twitter from '../tools/Group 34.png';
import insta from '../tools/Group 33.png';
import medium from '../tools/Group 35.png';
import linkendin from '../tools/Layer_2.png';

function SocialMedia() {
    return (
        <div>
            <ul className="social-icon-list">
                <li className="social-icon-list-li">
                    <a href="https://www.facebook.com/thriveagric" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={fb} alt="Thriveagric facebook" />
                    </a>
                </li>
                <li className="social-icon-list-li">
                    <a href="https://twitter.com/thriveagric" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={twitter} alt="Thriveagric twitter" />
                    </a>
                </li>
                <li className="social-icon-list-li">
                    <a href="https://www.instagram.com/thriveagrichq/" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={insta} alt="Thriveagric instagram" />
                    </a>
                </li>
                <li className="social-icon-list-li">
                    <a href="https://medium.com/thrive-agric" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={medium} alt="Thriveagric medium" />
                    </a>
                </li>
                <li className="social-icon-list-li">
                    <a href="https://www.linkedin.com/company/thriveagric/" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={linkendin} alt="Thriveagric linkendin" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default SocialMedia;