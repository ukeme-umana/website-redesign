import React,{Component} from 'react';
import Banner from '../component-for-pages/stories/banner';
import Body from '../component-for-pages/stories/body';
/* import Header from '../component-for-pages/header'; */
import Footer from '../component-for-pages/footer';

class Story extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Banner/>
                <Body/>
                <Footer/>
            </div>

        );
    }
} 
export default Story;