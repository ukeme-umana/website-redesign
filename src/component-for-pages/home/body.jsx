import React from 'react';
import partners from '../../tools/partners.png';
import farmer from '../../tools/video.png';
import img1 from '../../tools/img1.svg';
import img2 from '../../tools/img2.svg';
import img3 from '../../tools/img3.svg';
import img4 from '../../tools/img4.svg';
import dots from '../../tools/dots.svg';

import quotes from '../../tools/greenquote.svg';
import farm1 from '../../tools/Rice-Farm-Aji-and-Kura-Kano-feb-nov.jpg';
import farm2 from '../../tools/Rice-Farm-Warawa-&-Ajingi-Kano.jpg';
import farm3 from '../../tools/thrivePoultrySold_out@.png';
import farm4 from '../../tools/Soybeans.jpg';
import sarahJames from '../../tools/sarah-james.jpg';
import tolulopeOgunkoya from '../../tools/Tolulope Ogunkoya.jpg';
import emmanuelIhim from '../../tools/Emmanuel Ihim.jfif';
import ralphIortim from '../../tools/Ralph Iortim.jpg';
import abdulfataiMuhammed from '../../tools/Abdulfatai Muhammed.jpg';
import partners1 from '../../tools/Mask Group 109.png';
import partners2 from '../../tools/Mask Group 110.png';
import partners3 from '../../tools/Mask Group 111.png';
import partners4 from '../../tools/Mask Group 112.png';
import partners5 from '../../tools/Mask Group 113.png';
import partners6 from '../../tools/Mask Group 114.png';
import farmer1 from '../../tools/Thrive Agric Farm Stories- Episode 1.mp4';



function Body() {
    return (
        <div>

            {/* How Thrive Agric Works */}
            <div class="col-md-12 col-xs-12">
                <div className="home-body-wrapper">
                <div className="partners-wrapper">
                <div className="partner-img-div">
                    <img src={partners1} alt="" className="partners-logo" />
                </div>
                <div className="partner-img-div">
                    <img src={partners2} alt="" className="partners-logo" />
                </div>
                <div className="partner-img-div">
                    <img src={partners3} alt="" className="partners-logo" />
                </div>
                <div className="partner-img-div">
                    <img src={partners4} alt="" className="partners-logo" />
                </div>
                <div className="partner-img-div">
                    <img src={partners5} alt="" className="partners-logo" />
                </div>
                <div className="partner-img-div">
                    <img src={partners6} alt="" className="partners-logo" />
                </div>

                    
            </div>
                    <div className="how-thrive-text">
                        <span className="how-thrive-text-span">How Thrive Agric Works</span>
                    </div>
                    <div className="how-it-works-wrapper">
                        <div className="how-it-works-child" class="col-lg-3 col-md-6">
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
                        <div className="how-it-works-child" class="col-lg-3 col-md-6">
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
                        <div className="how-it-works-child" class="col-lg-3 col-md-6">
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
                        <div className="how-it-works-child" class="col-lg-3 col-md-6">
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
                    <div class="">
                    <div className="get-started-div" >
                        <button className="get-started-button">
                            <a className="button-to-fund-link-home btn-lg" href="blank">Get Started</a>
                        </button>
                    </div>
                    </div>
                </div>
            </div>

            {/* Our Farms */}
            <div class="col-md-12 col-xs-12">
                <div className="our-farms-wrapper">
                    <div class="col-md-12 body-process">
                        <h2 class="body-process-text">
                            Our
                        <span className="process-line">
                                Farms
                        </span>

                        </h2>
                    </div>
                    <div className="col-md-12 farm-section-wrapper">
                        {/* col-md-3 col-sm-6 col-xs-12 */}
                        <div className="col-lg-3 col-md-6 farms-ta">
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


                        <div className="col-lg-3 col-md-6 farms-ta">
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
                        <div class="col-lg-3 col-md-6 farms-ta" >
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
                        <div className="col-lg-3 col-md-6 farms-ta">
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
            <div class="col-md-12 col-xs-12">
                <div className="how-far-wrapper">
                    <div class="body-process">
                        <h2 class="body-process-text">
                            How
                        <span className="process-line">
                                Far
                        </span>
                        We Have Come
                    </h2>
                    </div>
                    
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
                                {/* <div className="rd-text-div top-space">
                                    <a href="blank" className="rd-text">Read more</a>
                                </div> */}

                            </div>
                </div>
                </div>

            </div>

            {/* Stats */}
            <div class="col-md-12 col-xs-12">
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
                    
                </div>
                <div className="green-dot hidden-sm hidden-xs green ">
                    <img src={dots} className="dots-img" alt="" />
                </div>
            </div>

            {/* Testimonial */}
           {/*  <div class="col-md-12 col-xs-12">
                <div className="testimonial-wrapper" >
                    <div class="col-md-6">
                    <div className="testimonial-pic" >
                        <span className="green-quotes">"</span>
                        <img src={customer1} className="testimonial-img" alt="" />
                    </div>
                    </div>
                    <div class="col-md-6">
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
            </div> */}

            <div class="container">
              <div class="row">
                {/* <div class='col-md-offset-2 col-md-8 text-center'>
                <h2>Responsive Quote Carousel BS3</h2>
                </div> */}
              </div>
              <div class='row'>
                <div class='col-md-offset-2 col-md-8'>
                  <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                   
                    <ol class="carousel-indicators">
                      <li data-target="#quote-carousel" data-slide-to="0" class="active"></li>
                      <li data-target="#quote-carousel" data-slide-to="1"></li>
                      <li data-target="#quote-carousel" data-slide-to="2"></li>
                      <li data-target="#quote-carousel" data-slide-to="3"></li>
                      <li data-target="#quote-carousel" data-slide-to="4"></li>
                      {/* <li data-target="#quote-carousel" data-slide-to="5"></li>
                      <li data-target="#quote-carousel" data-slide-to="6"></li> */}
                    </ol>
                    
                    
                    <div class="carousel-inner">
                    
                      
                      <div class="item active">
                        <blockquote>
                          <div class="row">
                            <div class="col-sm-3 text-center">
                  <img class="img-circle" src={sarahJames}  alt="" />
                  
                </div>
                            <div class="col-sm-9">
                            <p class="monteserrat-font">
                                                "I love Thrive Agric because it provides microloans to Nigerian farmers and 
                                                a channel to sell produce to large buyers like Flour mills. It makes farmers 
                                                more efficient by providing seamless access to financing, 
                                                agricultural best practices and a premium market for their products"
                                                </p>
                                                <small class="bold-black monteserrat-font">SARAH JAMES</small>
                
                </div>
              </div>
            </blockquote>
          </div>
          
          <div class="item">
            <blockquote>
              <div class="row">
                <div class="col-sm-3 text-center">
                  <img class="img-circle" src={emmanuelIhim} alt="" />
                </div>
                <div class="col-sm-9">
                <p class="monteserrat-font">
                    "I've been using the platform since 2017. 
                    I love how the farms can be funded without hassle or fuss. 
                    I also love how payments are paid promptly. It builds trust. 
                    Thanks so much!"
                </p>
                <small class="bold-black monteserrat-font">EMMANUEL IHIM</small>
                
                </div>
              </div>
            </blockquote>
          </div>
          
                  <div class="item">
                    <blockquote>
                      <div class="row">
                        <div class="col-sm-3 text-center">
                          <img class="img-circle" src={tolulopeOgunkoya} alt=""  />
                        </div>
                        <div class="col-sm-9">
                        <p class="monteserrat-font">
                                        "I love Thrive Agric because it gives young people like
                                         myself the opportunity to invest in my passion which is 
                                         Agriculture. The smiles on the faces of the farmers are so 
                                         rewarding (that doesn't mean I'll forfeit my investment gains lol).
                                          But the reason I am so in love with Thrive Agric is that the emails
                                                       I receive are just like mail from a friend. 
                                                    Thrive Agric #notyourregularcompany"

                                    </p>
                                    <small class="bold-black monteserrat-font">TOLULOPE OGUNKOYA</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>

                     <div class="item">
                        <blockquote>
                          <div class="row">
                            <div class="col-sm-3 text-center">
                              <img class="img-circle" src={ralphIortim} alt="" />
                            </div>
                            <div class="col-sm-9">
                            <p class="monteserrat-font">
                                "Thrive Agric uses digital agriculture platform to connect farmers and investors 
                                together to enhance the agricultural value chain. I will recommend it to others. 
                                And I love Thrive Agric because it actually makes it possible to invest in agriculture without 
                                having to be a farmer or owning farmland. It is a good platform to know to be innovative and 
                                creative with ideas than can further improve and sustain Agricultural products and activities"
                            </p>
                            <small class="bold-black monteserrat-font">RAPHAEL LORTIM</small>

                            </div>
                          </div>
                        </blockquote>
                      </div>

                      <div class="item">
                        <blockquote>
                          <div class="row">
                            <div class="col-sm-3 text-center">
                              <img class="img-circle" src={abdulfataiMuhammed} alt="" />
                            </div>
                            <div class="col-sm-9">
                            <p class="monteserrat-font">
                                "I love Thrive Agric because it empowers farmers and provides business opportunities 
                                for investors by using technology 
                                to drive new agricultural revolution to achieve food security. 
                                I will recommend it"
                            </p>
                            <small class="bold-black monteserrat-font">ABDULFATAI MUHAMMED</small>

                            </div>
                          </div>
                        </blockquote>
                      </div>

                      {/* <div class="item">
                        <blockquote>
                          <div class="row">
                            <div class="col-sm-3 text-center">
                              <img class="img-circle" src={emmanuelIhim} alt="" />
                            </div>
                            <div class="col-sm-9">
                            <p class="monteserrat-font">
                                "I've been using the platform since 2017. 
                                I love how the farms can be funded without hassle or fuss. 
                                I also love how payments are paid promptly. It builds trust. 
                                Thanks so much!"
                            </p>
                            <small class="bold-black monteserrat-font">EMMANUEL IHIM</small>

                          </div>
                        </div>
                      </blockquote>
                    </div>

                      <div class="item">
                        <blockquote>
                          <div class="row">
                            <div class="col-sm-3 text-center">
                              <img class="img-circle" src={emmanuelIhim} alt="" />
                            </div>
                            <div class="col-sm-9">
                            <p class="monteserrat-font">
                                "I've been using the platform since 2017. 
                                I love how the farms can be funded without hassle or fuss. 
                                I also love how payments are paid promptly. It builds trust. 
                                Thanks so much!"
                            </p>
                            <small class="bold-black monteserrat-font">EMMANUEL IHIM</small>

                            </div>
                          </div>
                        </blockquote>
                      </div> */}
                    </div>
                  
                  
                  
                  
                    <a data-slide="prev" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
                    <a data-slide="next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                  </div>                          
                </div>
              </div>
</div>
        </div >
    );
}
export default Body;