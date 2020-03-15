import React,{Component} from 'react';
import Banner2 from '../component-for-pages/team/banner';
import Body from '../component-for-pages/team/body';
/* import Header from '../component-for-pages/header'; */
import Footer from '../component-for-pages/footer';

class Team extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <Banner2/>
                <Body/>
                <Footer/>
            </div>

        );
    }
} 
export default Team;