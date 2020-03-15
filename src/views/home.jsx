import React,{Component} from 'react';
import Banner from '../component-for-pages/home/banner';
 import Body from '../component-for-pages/home/body'; 
/* import Header from '../component-for-pages/header'; */
import Footer from '../component-for-pages/footer';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Banner/>
                <Body />
                <Footer/>
            </div>

        );
    }
} 
export default Home;