import React from 'react';
import farmer from '../../tools/video.png';

function Body() {
    return (
        <div>
            <div class="body-process">
                <h2 class="body-process-text">
                     Our 
                    <span className="process-line">
                        Farmers
                    </span>
                      Story 
                </h2>
            </div>
            <div className="farmer-story-parent" >
                <div className="farmer-story-group" >
                    <div className="video-div" >
                        <img src={farmer} alt="" className="video-img"/>
                    </div>
                    <div className="farmer-story-text-parent" >
                        <h3 className="farmer-story-text-title">
                        Stories from the 
                            <span className="process-line" >Farms.</span>
                        </h3>
                        <span className="farmer-story-text" >We fondly call ourselves Farmily. At our core, we are
                        <br/>
                         a technology-driven agricultural company
                         <br/>
                          passionate about ensuring global food security. We 
                          <br/>
                          get funds to support farmers from people like you,
                          <br/> 
                          with the promise of decent returns at the end of 
                          <br/>
                          each farming cycle.</span>
                        <div className="button-to-fund" >
                            <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                        </div>
                    </div>
                </div>
            
           
          
                <div className="farmer-story-group" >
                    <div className="farmer-story-text-parent" >
                        <h3 className="farmer-story-text-title">
                        Stories from the 
                            <span className="process-line" >Farms.</span>
                        </h3>
                        <span className="farmer-story-text" >We fondly call ourselves Farmily. At our core, we are
                        <br/>
                         a technology-driven agricultural company
                         <br/>
                          passionate about ensuring global food security. We 
                          <br/>
                          get funds to support farmers from people like you,
                          <br/> 
                          with the promise of decent returns at the end of 
                          <br/>
                          each farming cycle.
                          </span>
                        <div className="button-to-fund" >
                            <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                        </div>
                    </div>
                    <div className="video-div" >
                        <img src={farmer} alt="" className="video-img"/>
                    </div>
                   
                </div>
           

                <div className="farmer-story-group" >
                    <div className="video-div" >
                        <img src={farmer} alt="" className="video-img"/>
                    </div>
                    <div className="farmer-story-text-parent" >
                        <h3 className="farmer-story-text-title">
                         Stories from the 
                            <span className="process-line" >Farms.</span>
                        </h3>
                        <span className="farmer-story-text" >We fondly call ourselves Farmily. At our core, we are
                        <br/>
                         a technology-driven agricultural company
                         <br/>
                          passionate about ensuring global food security. We 
                          <br/>
                          get funds to support farmers from people like you,
                          <br/> 
                          with the promise of decent returns at the end of 
                          <br/>
                          each farming cycle.</span>
                        <div className="button-to-fund" >
                            <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;
