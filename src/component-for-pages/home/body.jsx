import React from 'react';
import partners from '../../tools/partners.png';
import farmer from '../../tools/video.png';
import img1 from '../../tools/img1.svg';
import img2 from '../../tools/img2.svg';
import img3 from '../../tools/img3.svg';
import img4 from '../../tools/img4.svg';
import dots from '../../tools/dots.svg';
import customer1 from '../../tools/customer.png';
import quotes from '../../tools/greenquote.svg';
import farm1 from '../../tools/Rice-Farm-Aji-and-Kura-Kano-feb-nov.jpg';
import farm2 from '../../tools/Rice-Farm-Warawa-&-Ajingi-Kano.jpg';
import farm3 from '../../tools/thrivePoultrySold_out@.png';
import farm4 from '../../tools/Soybeans.jpg';

function Body() {
    return (
        <div>

            {/* How Thrive Agric Works */}
            <div class="col-md-12">
                <div className="home-body-wrapper">
                    <div className="partners-wrapper">
                        <img src={partners} alt="" className="partners-img" />
                    </div>
                    <div className="how-thrive-text">
                        <span className="how-thrive-text-span">How Thrive Agric Works</span>
                    </div>
                    <div className="how-it-works-wrapper">
                        <div className="how-it-works-child">
                            <div className="how-it-works-up-part">
                                <div className="number-div">
                                    <span className="number-span">1.</span>
                                </div>
                                <div className="how-img-div">
                                    <img className="how-img" src={img1} alt="" />
                                </div>
                            </div>
                            <div className="how-it-works-down-part">
                                <div className="title-text-span-div">
                                    <span className="title-text-span">Create an Account</span>
                                </div>
                                <p className="how-text-p">Join our large community of
                           <br />
                            digital farmers funding farms,
                            <br />
                            empowering farmers and making
                            <br />
                            a profit. Sign up today using your
                           <br />
                           email to get started.
                           </p>
                            </div>
                        </div>
                        <div className="how-it-works-child">
                            <div className="how-it-works-up-part">
                                <div className="number-div">
                                    <span className="number-span">2.</span>
                                </div>
                                <div className="how-img-div">
                                    <img className="how-img" src={img2} alt="" />
                                </div>
                            </div>
                            <div className="how-it-works-down-part">
                                <div className="title-text-span-div">
                                    <span className="title-text-span">Choose a Farm</span>
                                </div>
                                <p className="how-text-p">After signing in, choose a farm
                           <br />
                           from the available set of farms,
                           <br />select the number of units you
                           <br />
                           would like to fund and proceed to
                           <br />
                           make the payments.
                           </p>
                            </div>
                        </div>
                        <div className="how-it-works-child">
                            <div className="how-it-works-up-part">
                                <div className="number-div">
                                    <span className="number-span">3.</span>
                                </div>
                                <div className="how-img-div">
                                    <img className="how-img" src={img3} alt="" />
                                </div>
                            </div>
                            <div className="how-it-works-down-part">
                                <div className="title-text-span-div">
                                    <span className="title-text-span">Get Updates</span>
                                </div>
                                <p className="how-text-p">On your personalised dashboard,
                           <br />
                            you would get regular realtime
                            <br />
                            updates for farm progress as well
                            <br />
                            as access details of all the farms
                           <br />
                            you have funded till date.
                            </p>
                            </div>
                        </div>
                        <div className="how-it-works-child">
                            <div className="how-it-works-up-part">
                                <div className="number-div">
                                    <span className="number-span">4.</span>
                                </div>
                                <div className="how-img-div">
                                    <img className="how-img" src={img4} alt="" />
                                </div>
                            </div>
                            <div className="how-it-works-down-part">
                                <div className="title-text-span-div">
                                    <span className="title-text-span">Get Returns</span>
                                </div>
                                <p className="how-text-p">
                                    Upon harvest, expected returns
                           <br />
                           of proceeds from produce are
                           <br />
                           distributed to all subscribers to a
                           <br />
                           farm. This is done within the
                           <br />
                           stated tenure period.
                           </p>
                            </div>
                        </div>
                    </div>
                    <div className="get-started-div" >
                        <button className="get-started-button">
                            <a className="button-to-fund-link-home" href="blank">Get Started</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Our Farms */}
            <div class="col-md-12">
                <div className="our-farms-wrapper">
                    <div class="body-process">
                        <h2 class="body-process-text">
                            Our
                        <span className="process-line">
                                Farms
                        </span>

                        </h2>
                    </div>
                    <div className="farm-section-wrapper">
                        <div className="farms-ta">
                            <img src={farm1} alt="" className="farm-img" />
                            <span className="closed-sign">CLOSED</span>
                            <div className="farm-align-text">
                                <h5 className="farm-title">Rice Farm</h5>
                                <p className="farm-state">Aji and Kura, Kano</p>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-duration">Duration</p>
                                        <p className="farm-months bold">9 months</p>
                                    </div>
                                    <div className="margin-lft">
                                        <p className="farm-duration">Returns</p>
                                        <h1 className="interest-h1">20%</h1>
                                    </div>
                                </div>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-price">Price</p>
                                        <p className="farm-amount bold">&#8358; 56,500</p>
                                    </div>
                                    <div className="margin-lft mg-top">
                                        <p className="closed-text-p bold">closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="farms-ta">
                            <img src={farm2} alt="" className="farm-img" />
                            <span className="closed-sign">CLOSED</span>
                            <div className="farm-align-text">
                                <h5 className="farm-title">Rice Farm</h5>
                                <p className="farm-state">Warawa and Agingi, Kano</p>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-duration">Duration</p>
                                        <p className="farm-months bold">9 months</p>
                                    </div>
                                    <div className="margin-lft">
                                        <p className="farm-duration">Returns</p>
                                        <h1 className="interest-h1">20%</h1>
                                    </div>
                                </div>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-price">Price</p>
                                        <p className="farm-amount bold">&#8358; 56,500</p>
                                    </div>
                                    <div className="margin-lft mg-top">
                                        <p className="closed-text-p bold">closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="farms-ta">
                            <img src={farm3} alt="" className="farm-img" />
                            <span className="closed-sign">CLOSED</span>
                            <div className="farm-align-text">
                                <h5 className="farm-title">Poultry Farm</h5>
                                <p className="farm-state">South west</p>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-duration">Duration</p>
                                        <p className="farm-months bold">6 months</p>
                                    </div>
                                    <div className="margin-lft">
                                        <p className="farm-duration">Returns</p>
                                        <h1 className="interest-h1">15%</h1>
                                    </div>
                                </div>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-price">Price</p>
                                        <p className="farm-amount bold">&#8358; 85,000</p>
                                    </div>
                                    <div className="margin-lft mg-top">
                                        <p className="closed-text-p bold">closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="farms-ta">
                            <img src={farm4} alt="" className="farm-img" />
                            <span className="closed-sign">CLOSED</span>
                            <div className="farm-align-text">
                                <h5 className="farm-title">Rice Farm</h5>
                                <p className="farm-state">Kebbi and Niger</p>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-duration">Duration</p>
                                        <p className="farm-months bold">9 months</p>
                                    </div>
                                    <div className="margin-lft">
                                        <p className="farm-duration">Returns</p>
                                        <h1 className="interest-h1">20%</h1>
                                    </div>
                                </div>
                                <div className="justify-horizontally">
                                    <div >
                                        <p className="farm-price">Price</p>
                                        <p className="farm-amount bold">&#8358; 47,600</p>
                                    </div>
                                    <div className="margin-lft mg-top">
                                        <p className="closed-text-p bold">closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How Far We Have Come */}
            <div class="col-md-12">
                <div className="our-farms-wrapper">
                    <div class="body-process">
                        <h2 class="body-process-text">
                            How
                        <span className="process-line">
                                Far
                        </span>
                        We Have Come
                    </h2>
                    </div>

                    <div className="farmer-story-parent" >
                        <div className="farmer-story-group" >
                            <div className="video-div" >
                                <img src={farmer} alt="" className="video-img" />
                            </div>
                            <div className="farmer-story-text-parent" >
                                <h3 className="farmer-story-text-title">
                                    Stories from the
                                <span className="process-line" >Farms.</span>
                                </h3>
                                <span className="farmer-story-text" >We fondly call ourselves Farmily. At our core, we are
                            <br />
                             a technology-driven agricultural company
                             <br />
                              passionate about ensuring global food security. We
                              <br />
                              get funds to support farmers from people like you,
                              <br />
                              with the promise of decent returns at the end of
                              <br />
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

            </div>

            {/* Stats */}
            <div class="col-md-12">
                <div className="stats-wrapper container">
                    <div class="col-md-3">
                        <div class="stat-single">
                            <h3 className="green-num">127,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Acres Farmed</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-single">
                            <h3 className="green-num">2,600,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Birds Raised</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-single">
                            <h3 className="green-num">170,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Metric Tonnes of Grains</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="stat-single">
                            <h3 className="green-num">18,500
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Farmers worked with</p>
                        </div>
                    </div>
                    {/* <ul className="stats-ul">
                        <li className="stats-li">
                            <h3 className="green-num">127,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Acres Farmed</p>
                        </li>
                        <li className="stats-li">
                            <h3 className="green-num">2,600,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Birds Raised</p>
                        </li>
                        <li className="stats-li">
                            <h3 className="green-num">170,000
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Metric Tonnes of Grains</p>
                        </li>
                        <li className="stats-li">
                            <h3 className="green-num">18,500
                                <span className="green-plus">+</span>
                            </h3>
                            <p className="grey-p">Farmers worked with</p>
                        </li>
                    </ul> */}
                </div>
                <div className="green-dot hidden-sm hidden-xs green ">
                    <img src={dots} className="dots-img" alt="" />
                </div>
            </div>

            {/* Testimonial */}
            <div class="col-md-12">
                <div className="testimonial-wrapper" >
                    <div className="testimonial-pic" >
                        <span className="green-quotes">"</span>
                        <img src={customer1} className="testimonial-img" alt="" />
                    </div>
                    <div className="testimonial-text" >
                        <p className="testimonial-text-p">
                            “ I am excited at the wonderful farms that ThriveAgric offer in addition to the high returns on investments and the insurance coverage.
                        <br />
                            <br />
                        I receive my payouts as at when due. I am proud to be a farm subscriber, empowering communities and affecting lives positively.”
                        </p>
                        <span className="testimonial-text-span">DR. IKENNA OKPALA</span>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Body;