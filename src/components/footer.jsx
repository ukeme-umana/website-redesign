import React from  "react";

function Footer() {
    return (
        <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo">Address</h1>
                    
                <h2>Contact</h2>
                
                <address>
                     Ewet Housing Estate, Uyo
                     <br/>
                    
                    <a class="footer__btn" href="mailto:ukeme_umana@yahoo.com">Send an Email</a>
                </address>
            </div>
            
            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Media</h2>

                    <ul class="nav__ul">
                        <li>
                            <a href="dummy">Instagram</a>
                        </li>

                        <li>
                            <a href="dummy">Twitter</a>
                        </li>
                            
                        <li>
                            <a href="dummy">Facebook</a>
                        </li>
                    </ul>
                </li>
                
                <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Call Us</h2>
                    
                    <ul class="nav__ul nav__ul--extra">
                        <li>
                            <a href="dummy">+234 8884439922</a>
                        </li>
                        
                        <li>
                            <a href="dummy">+444 8893900478</a>
                        </li>
                        
                        <li>
                            <a href="dummy">+124 9074435698</a>
                        </li>
                        
                        {/* <li>
                        <a href="dummy">Automation</a>
                        </li>
                        
                        <li>
                        <a href="dummy">Artificial Intelligence</a>
                        </li>
                        
                        <li>
                        <a href="dummy">IoT</a>
                        </li> */}
                    </ul>
                </li>
                
                <li class="nav__item">
                    <h2 class="nav__title">Policies</h2>
                    
                    <ul class="nav__ul">
                        <li>
                            <a href="dummy">Privacy Policy</a>
                        </li>
                        
                        <li>
                            <a href="dummy">Terms of Use</a>
                        </li>
                        
                        {/* <li>
                        <a href="dummy">Sitemap</a>
                        </li> */}
                    </ul>
                </li>
            </ul>
            
            <div class="legal">
                <p>&copy; 2020. All rights reserved.</p>
                
                <div class="legal__links">
                    <span>Made by Ukeme <span class="heart" role="img"  aria-label="Grin">&#128517;</span> </span>
                </div>
            </div>
</footer>
    );
}
export default Footer;


