import React from 'react';
import ag from '../tools/Group 43.svg';
import aw from '../tools/Group 43w.svg';
import bg from '../tools/Group 46.svg';
import bw from '../tools/Group 46w.svg';
import cg from '../tools/Group 44.svg';
import cw from '../tools/Group 44w.svg';
import dg from '../tools/Group 148.svg';
import dw from '../tools/Group 48.svg';
import eg from '../tools/Group 45.svg';
import ew from '../tools/Group 45w.svg';
import fg from '../tools/Group 149g.svg';
import fw from '../tools/Group 147.svg';
import thrive1 from '../tools/vicepresident.png';
import thrive2 from '../tools/harvardbusiness.png';
import thrive3 from '../tools/netpreneur.png';
import thrive4 from '../tools/socialweek.png';
import thrive5 from '../tools/pitch.png';
import thrive6 from '../tools/wfp.png';
import {Component} from 'react';
import partners from '../tools/partners.png';
import partners1 from '../tools/Mask Group 109.png';
import partners2 from '../tools/Mask Group 110.png';
import partners3 from '../tools/Mask Group 111.png';
import partners4 from '../tools/Mask Group 112.png';
import partners5 from '../tools/Mask Group 113.png';
import partners6 from '../tools/Mask Group 114.png';




function Thebody() {
    return (
        <div className="max-width-wrapper">
            {/* <img src={partners} alt="" className="partners-img" /> */}
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
            <div className="body-process">
                <h2 className="body-process-text-green">
                    How Our Work Process Work
                </h2>
            </div>
            <div className="process-wrapper">
                <div class="tabs">
                    <input id="tab1" type="radio" name="tabs"  />
                    <label for="tab1" className="animation-circle">
                        <img src={ag} alt="" className="img-font-green" />
                        <img src={aw} alt="" className="img-font-white" />
                    </label>
                    <input id="tab2" type="radio" name="tabs"/>
                    <label for="tab2" className="animation-circle">
                        <img src={bg} alt="" className="img-font-green" />
                        <img src={bw} alt="" className="img-font-white" />
                    </label>
                    <input id="tab3" type="radio" name="tabs" />
                    <label for="tab3" className="animation-circle">
                        <img src={cg} alt="" className="img-font-green" />
                        <img src={cw} alt="" className="img-font-white" />
                    </label>
                    <input id="tab4" type="radio" name="tabs" />
                    <label for="tab4" className="animation-circle">
                        <img src={dg} alt="" className="img-font-green" />
                        <img src={dw} alt="" className="img-font-white" />
                    </label>
                    <input id="tab5" type="radio" name="tabs" />
                    <label for="tab5" className="animation-circle">
                        <img src={eg} alt="" className="img-font-green" />
                        <img src={ew} alt="" className="img-font-white" />
                    </label>
                    <input id="tab6" type="radio" name="tabs" />
                    <label for="tab6" className="animation-circle">
                        <img src={fg} alt="" className="img-font-green" />
                        <img src={fw} alt="" className="img-font-white" />
                    </label>
                    <div class="content">
                          <div id="content1">
                                <span className="span-bold-t">We Are Driven By Data</span>
                                <p className="p-hidden-t">We are making the best decisions backed with on-field data to improve yield.
                                     We take farm land coordinates and crops planted, weekly satellite imagin
                                     soil condition tests analysis to ensure right predictions on weather conditions
                                      and other factors affecting yield.</p>
                          </div>

                          <div id="content2">
                                <span className="span-bold-t">Powered By Technology</span>
                                <p className="p-hidden-t">Technology powers our process
                                Our extension workers have a custom app which collates varying data of farmers and farm operations, 
                                this helps us automate SMS on weather update market prices for inputs and other information to the 
                                farmers on crops they are planting and livestock reared.</p>
                          </div>

                          <div id="content3">
                              <span className="span-bold-t">We Engage Extension Services</span>
                                <p className="p-hidden-t">We deploy skilled extension workers on all our farms to grow relationships
                                     with our farmers as well as engage them with newer methods to improve yield.
                                     Via our in-built reporting systems, these Agricultural professionals report to our
                                      operations team, all these efforts help us track farmer activities and in-turn link 
                                      them to local and global markets.</p>
                          </div>
     
                          <div id="content4">
                              <span className="span-bold-t">You Are Covered, Most Assuredly</span>
                                <p className="p-hidden-t">We are always protecting you and the farmers from uncertainty in yield.
                                 All our farms are fully insured by Leadway assurance and in the case that farms get infested,
                                 unusual mortality rates or any other unfortunate events, your capital is insured.</p>
                          </div>

                          <div id="content5">
                              <span className="span-bold-t">Farmers First, Always</span>
                                <p className="p-hidden-t">Our farmers are our core priority, in fact,
                                 growth for us means we are able to support them with your funds. We make sure that all that is needed 
                                 to ensure a productive farming season is provided. From best inputs, to monitoring, 
                                mechanisation and education, we know for a certain that happy farmers equal good returns for you.</p>
                          </div>
     
                          <div id="content6">
                              <span className="span-bold-t">We Keep You Posted</span>
                                <p className="p-hidden-t">We keep you in the loop and provide you with a full experience of
                                 what is going on in the farm you are subscribed to. You get periodic updates that are detailed enough 
                                 to keep you abreast of progress on crop or animal production for your subscribed farm. 
                                We have also created an opportunity for you to pay a farm visit at any point on your request.</p>
                          </div>
                   </div>

                </div>
                {/* <ul className="ani-ul">
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">We Are Driven By Data</span>
                            <p className="p-hidden-t">We are making the best decisions backed with on-field data to improve yield.
                                 We take fam land coordinates and crops planted, weekly satellite imagin
                                 soil condition tests analysis to ensure right predictions on weather conditions
                                  and other factors affecting yield.</p>
                        </div>
                    </li>
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">Powered By Technology</span>
                            <p className="p-hidden-t">Technology powers our process
                        Our extension workers have a custom app which collates varying data of farmers and farm operations, 
                        this helps us automate SMS on weather update market prices for inputs and other information to the 
                        farmers on crops they are planting and livestock reared.</p>
                        </div>
                    </li>
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">We Engage Extension Services</span>
                            <p className="p-hidden-t">We deploy skilled extension workers on all our farms to grow relationships
                                 with our farmers as well as engage them with newer methods to improve yield.
                                 Via our in-built reporting systems, these Agricultural professionals report to our
                                  operations team, all these efforts help us track farmer activities and in-turn link 
                                  them to local and global markets.</p>
                        </div>
                    </li>
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">You Are Covered, Most Assuredly</span>
                            <p className="p-hidden-t">We are always protecting you and the farmers from uncertainty in yield.
                             All our farms are fully insured by Leadway assurance and in the case that farms get infested,
                             unusual mortality rates or any other unfortunate events, your capital is insured.</p>
                        </div>
                    </li>
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">Farmers First, Always</span>
                            <p className="p-hidden-t">Our farmers are our core priority, in fact,
                             growth for us means we are able to support them with your funds. We make sure that all that is needed 
                             to ensure a productive farming season is provided. From best inputs, to monitoring, 
                            mechanisation and education, we know for a certain that happy farmers equal good returns for you.</p>
                        </div>
                    </li>
                    <li className="animation-circle">
                        <div className="hidden-text li-text">
                            <span className="span-bold-t">We Keep You Posted</span>
                            <p className="p-hidden-t">We keep you in the loop and provide you with a full experience of
                             what is going on in the farm you are subscribed to. You get periodic updates that are detailed enough 
                             to keep you abreast of progress on crop or animal production for your subscribed farm. 
                            We have also created an opportunity for you to pay a farm visit at any point on your request.</p>
                        </div>
                    </li>
                </ul> */}
            </div>
             
            <div className="thriveagric-works-wrapper">
                <div class="body-process">
                     <h2 class="body-process-text">How <span class="process-line">Thrive Agric</span> Works</h2>
                </div>
                <div className="thriveagric-work-parent">
                    <div class="thriveagric-work">
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive1} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">We shared our work with Vice President, Yemi Osinbajo</p>
                            </div>
                        </div>
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive2} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">Our CEO, Uka Eje speaking at the Havard Business School</p>
                            </div>
                            </div>
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive3} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">Uka Eje and Ayodeji Arikawe at the Netpreneur Prize Finale</p>
                            </div>
                            </div>
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive4} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">Charles Isidi of Thrive Agric at Social Media Week</p>
                            </div>
                        </div>
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive5} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">We Pitched at the Palace of the Duke Of York</p>
                            </div>
                        </div>
                        <div class="someworks">
                            <div class="work-img-div">
                                <img src={thrive6} alt="" className="work-img" />
                            </div>
                            <div class="work-text">
                                <p class="work-text-p">Ayo Arikawe at World Food Programme’s innovation 2020</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
            

    );
}

export default Thebody;