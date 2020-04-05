import React from 'react';

function Banner() {
    return (
        <div className="col-md-12 col-xs-12">
            <div class="body-banner-home">
                <div class="body-banner-text2-home ">
                        <h2 className="banner-h2-text-home">Fund a Farmer <br/> Make a profit!</h2>
                    
                        <p className="banner-p-text-home">
                        Partner in our Journey to empower farmers and
                        <br/>
                         build an Africa that feeds the world and Itself.
                        </p>
                </div>
                <div class="btn-parent" /* class="btn-lg" */>
                    <button className="button-to-fund-home ">
                        <a className="button-to-fund-link-home" href="blank">Fund a Farm</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Banner;