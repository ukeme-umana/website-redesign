import React from 'react';
import farmer from '../../tools/video.png';

function Body() {
    return (
        <div class="col-md-12 col-xs-12">
            <div class="body-process">
                <h2 class="body-process-text">
                     Our 
                    <span className="process-line">
                        Farmers
                    </span>
                      Story 
                </h2>
            </div>
            <div className="">
                <div class="col-md-6">
                    <div className="video-div" >
                        <img src={farmer} alt="" className="video-img" />
                    </div>
                </div>
                <div class="col-md-6">
                            <div className="farmer-story-text-parent1" >
                                <h3 className="farmer-story-text-title">
                                    Stories from the
                                <span className="process-line" >Farms.</span>
                                </h3>
                                <span className="farmer-story-text" >We fondly call ourselves Farmily. 
                                    At our core, we are a technology-driven agricultural company
                                    passionate about ensuring global food security. We
                                    get funds to support farmers from people like you,
                                    with the promise of decent returns at the end of
                                    each farming cycle.
                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                                <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div>

                            </div>
                </div>
            </div>
            <div className="">
                <div class="col-md-6">
                            <div className="farmer-story-text-parent2" >
                                <h3 className="farmer-story-text-title">
                                    Stories from the
                                <span className="process-line" >Farms.</span>
                                </h3>
                                <span className="farmer-story-text" >We fondly call ourselves Farmily. 
                                    At our core, we are a technology-driven agricultural company
                                    passionate about ensuring global food security. We
                                    get funds to support farmers from people like you,
                                    with the promise of decent returns at the end of
                                    each farming cycle.
                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                                <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div>

                            </div>
                </div>
                <div class="col-md-6">
                    <div className="video-div2" >
                        <img src={farmer} alt="" className="video-img" />
                    </div>
                </div>
            </div>
            <div className="">
                <div class="col-md-6">
                    <div className="video-div3" >
                        <img src={farmer} alt="" className="video-img" />
                    </div>
                </div>
                <div class="col-md-6">
                            <div className="farmer-story-text-parent3" >
                                <h3 className="farmer-story-text-title">
                                    Stories from the
                                <span className="process-line" >Farms.</span>
                                </h3>
                                <span className="farmer-story-text" >We fondly call ourselves Farmily. 
                                    At our core, we are a technology-driven agricultural company
                                    passionate about ensuring global food security. We
                                    get funds to support farmers from people like you,
                                    with the promise of decent returns at the end of
                                    each farming cycle.
                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                                <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div>

                            </div>
                </div>
            </div>
        </div>
    );
}
export default Body;


