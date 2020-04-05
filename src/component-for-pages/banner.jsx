import React from 'react';
import abtpic from '../tools/abtpic.png';

function Banner() {
    return (
        
        <div className="max-width-wrapper body-banner">
            <div className="abt-us-banner">
                <div class="body-banner-text">
                    <div className="move-text">
                        <h1 className="h1-abt-banner-text">Our Work In Pictures</h1>
                        <p className="p-abt-text">
                            We fondly call ourselves Farmily. At our core, we are a technology-driven agricultural company
                            passionate about ensuring global food security. We get funds to support farmers from people 
                            like you, with the promise of decent returns at the end of each farming cycle.
                            <br/>
                            <br/>
                            We are on a mission to build an Africa that feeds the world and Itself.
                        </p>
                    </div>
                </div>
                <div className="abt-curve-banner-pic">
                    <img src={abtpic} className="abt-curve-img" alt="" />
                </div>
            </div>
        </div>
    );
}
export default Banner;