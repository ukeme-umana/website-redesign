import React from 'react';
import farmer1 from '../../tools/Thrive Agric Farm Stories- Episode 1.mp4';
import farmer2 from '../../tools/Thrive Agric Farm Stories- Episode 2.mp4';
import farmer3 from '../../tools/Thrive Agric Farm Stories- Episode 3.mp4';

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
                        <video  alt="" controls className="video-img"  >
                            <source src={farmer1} type="video/mp4"/>
                        </video>

                    </div>
                </div>
                <div class="col-md-6">
                            <div className="farmer-story-text-parent1" >
                            <h3 className="farmer-story-text-title">
                                Mallam 
                                <span className="process-line" >Usman</span>
                                </h3>
                                <span className="farmer-story-text" >Do you ever ask yourself if your funds are actually making an
                                 impact in Farmers' lives?
                                 Here is Usman to tell you just how you've been a tremendous help to him and his farm operations.
                                <br/>
                                
                                Mallam Usman is quite a lively man and it is obvious from the way he spoke about our work 
                                with him so far in our conversation with him. He explained how his yield has increased and how his 
                                workload has reduced to a bare minimum because of the 
                                inputs your funds have helped us provide him with.
                                <br/>
                                <br/>
                                Don't take our word for it, watch him tell you how much of an
                                 impact you're making in his life. Cheers to more profitable farmers
                                  and their Families, thanks to you&#128154;	&#128154;

                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                               {/*  <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div> */}

                            </div>
                </div>
            </div>
            <div className="">
                <div class="col-md-6">
                            <div className="farmer-story-text-parent2" >
                            <h3 className="farmer-story-text-title">
                                Elizabeth 
                                <span className="process-line" >Yakubu</span>
                                </h3>
                                <span className="farmer-story-text" >Meet Elizabeth Yakubu, one of our maize farmers in Kaduna, 
                                who is doing excellently thanks to you. Before we got to work with her, 
                                work for her was backbreaking and her yields couldn't measure up side by side.
                                <br/>
                                <br/>
                                In this video, she bares how things have become better, 
                                She goes on to say that the increased yield of her maize farm and the value we create for her is 
                                enough motivation for her to keep being a Thrive Agric Farmer.
                                <br/>
                                She is happy to be a part of the Thrive Agric Family and is thankful to you for how much your funds are 
                                creating better lives for farmers like her. 
                                Stories like hers keep us going and reminds us why we even started this.
                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                                {/* <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div> */}

                            </div>
                </div>
                <div class="col-md-6">
                    <div className="video-div2" >
                        <video  alt="" controls className="video-img"  >
                            <source src={farmer2} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="">
                <div class="col-md-6">
                    <div className="video-div3" >
                        <video  alt="" controls className="video-img"  >
                            <source src={farmer3} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div class="col-md-6">
                            <div className="farmer-story-text-parent3" >
                                <h3 className="farmer-story-text-title">
                                Mallam 
                                <span className="process-line" >Musa</span>
                                </h3>
                                <span className="farmer-story-text" >Musa is one of the farmers your funds are creating a better livelihood for. 
                                Before he joined our Farmily, managing his 0.5ha maize farmland was insane. 
                                Beyond that, managing pests and weeds was difficult.
                                <br/>
                                <br/>
                                In the video, he shares his experience planting improved seeds and how his yield this current 
                                planting season is way better than ever before. He is grateful for how your funds have helped him 
                                increase his yield, 
                                made his farming activities much easier and more profitable.
                                <br/>
                                His story alone is enough motivation for us to do more and reach more farmers across Africa, 
                                do you promise to stand by us through this journey?
                                </span>
                                <div className="top-space" >
                                    <button className="button-to-fund">
                                        <a className="button-to-fund-link" href="blank">Fund a Farm</a>
                                    </button>
                                </div>
                                {/* <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div> */}

                            </div>
                </div>
            </div>
        </div>
    );
}
export default Body;


