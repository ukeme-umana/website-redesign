import React from 'react';
import playstore from '../tools/playstore.png';
import applestore from '../tools/appstore.png';
import SocialMedia from './socialmedia';

function Footer() {
    return (
        
       <div className="col-md-12 col-xs-12">
           <div className="get-thrive-app" >
               <div className="get-app-text">
                   <span className="get-app-span1" >Get the<span className="light-green">Thrive Agric </span> App.</span>
                   <span className="get-app-span2" >Fund A Farmer And Earn Decent Returns On The Go.</span>
               </div>
               <div className="app-link">
                   <a href="https://apps.apple.com/ng/app/thrive-agric/id1484330776" target="_blank" rel="noopener noreferrer">
                        <img src={applestore} alt="Get thrive app from applestore" className="app-img" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.thriveAgric123" target="_blank" rel="noopener noreferrer">
                        <img src={playstore} alt="Get thrive app from playstore" className="app-img" />
                    </a>
               </div>
               
           </div>
           <div className="col-md-12 footer-info-grand-parent">
                <div className="footer-info-parent">
                    <div className="col-md-3 col-sm-6 col-xs-12 footer-info-child">
                        <span className="footer-h3-text">Company</span>
                        <div className="footer-p-text">
                            <span className="footer-p">
                            One Farmer at a time,
                            <br/>
                             Thrive Agric is increasing 
                            <br/>
                             agricultural participation
                            <br/>
                               by allowing you easily fund 
                            <br/>
                               a farm with a promise to deliver
                            <br/>
                                profitable returns to you while
                            <br/>
                                 empowering farmers at the same
                            <br/>
                             time.
                            </span>
                        </div>
                        <SocialMedia/>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 footer-info-child">
                        <span className="footer-h3-text">Contact Us</span>
                        <div className="footer-p-text">
                            <span className="footer-p">31, 441 Crescent,<br/>
                             CITEC Villas,<br/>
                             Gwarinpa, Abuja,<br/>
                             Nigeria.<br/>
                             info@thriveagric.com <br/>
                             +234 (0) 816 716 4014
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 footer-info-child">
                        <span className="footer-h3-text">More Links</span>
                        <div className="footer-p-text">
                            <span className="footer-p"><a className="more-links" href="dummy">Contact Us</a><br/>
                             <a className="more-links" href="dummy">Terms and conditions</a><br/> 
                             <a className="more-links" href="dummy">FAQs</a><br/>
                             <a className="more-links" href="dummy">Our Blog</a> <br/>
                             <a className="more-links" href="dummy">Developers</a> <br/>
                             <a className="more-links" href="dummy">Careers</a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 footer-info-child">
                        <span className="footer-h3-text">Join our community</span>
                        <div className="footer-p-text">
                            <span className="footer-p">
                            We will love to reach you!<br/>
                             Subscribe to get exciting news and stories<br/> of all  {/* <br/> */}
                             the work we are doing to empower<br/>
                             farmers and ensure global food<br/> 
                            security.
                            </span>
                        </div>
                        <div className="footer-email-div">
                            <form>
                                <input type="email" id="footer-email" placeholder="Your email address" required/>
                                <button className="footer-submit"><i class="fa fa-chevron-right white"></i></button> 
                            </form>  
                        </div>
                    </div>
                </div>
                
                
           </div>
       </div>
       
    );
}
export default Footer;
