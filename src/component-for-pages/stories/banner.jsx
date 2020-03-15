import React from 'react';
/* import banner2 from '../../tools/banner2.png';
import banner1 from '../../tools/banner.svg'; */

function Banner() {
    return (
        <div className="body-banner-grandparent">
            <div class="body-banner3">
                {/* <div className="banner-wrapper"> 
                    <div className="banner-img1">
                         <img src={banner1} className="banner-img1-pic" alt=""/> *
                    </div>
                    <div className="banner-img2">
                        <img src={banner2} className="banner-img2-pic" alt=""/>
                    </div>
                </div>
                 */}
                <div class="body-banner-text3">
                    <h2 className="banner-h2-text">Stories From the Farms.</h2>
                
                    <p className="banner-p-text">
                        We fondly call ourselves Farmily. At our core, we are a technology-driven agricultural company
                        passionate about ensuring global food security. We get funds to support farmers from people 
                        like you, with the promise of decent returns at the end of each farming cycle.
                        <br/>
                        <br/>
                        We are on a mission to build an Africa that feeds the world and Itself.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Banner;