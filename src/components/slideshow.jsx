import React from 'react';
import firstslide from '../firstslide.jpg';
import secondslide from '../secondslide.jpg';
import thirdslide from '../thirdslide.jpg';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: firstslide,
    altText: 'coffee Slide1',
    caption: 'coffee rocks!',
    header: 'Cocoa beans', 
    key: '1'
  },
  {
    src: secondslide,
    altText: 'coffee Slide 2',
    caption: 'Work smarter with coffee',
    header: 'Drink coffee',
    key: '2'
  },
  {
    src: thirdslide,
    altText: 'coffee Slide 3',
    caption: 'Resist sleep',
    header: 'Make coffee', 
    key: '3'
  }
];

/* const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
 */
function SlideShow() {
    return (
        <div className="slideshow-container"> 
            
            <div>
                <UncontrolledCarousel items={items} />
            </div>     
            {/* <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={firstslide} alt="" style={{width: "100%"}} />
                    <div className="text"></div>
            </div>
        
            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src={secondslide} alt="" style={{width: "100%"}}/>
                <div className="text"></div>
            </div>
        
            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={thirdslide} alt="" style={{width:"100%"}}/>
                <div className="text"></div>
            </div>
            
        
            <a href="#satisfy" className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a  href="#satisfy" className="next" onclick="plusSlides(1)">&#10095;</a>
        
            <br/>
        
        
            <div>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
 */}
            

        </div>

    );
}
export default SlideShow; 

