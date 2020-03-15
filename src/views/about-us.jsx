import React,{Component} from 'react';
import Banner from '../component-for-pages/banner';
import Thebody from '../component-for-pages/body';
/* import Header from '../component-for-pages/header'; */
import Footer from '../component-for-pages/footer';

class Pages extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Banner/>
                <Thebody/>
                <Footer/>
            </div>

        );
    }
} 
export default Pages;