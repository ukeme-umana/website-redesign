/* /* import React,{Component} from 'react'
import Footer from '../components/footer';
class Learning extends Component{
    render(){
        return(
            <div>
                <div className="box-1">
                    <div className="box-2">
                        <div className="box-3">
                            <form>
                                <label for="username">Username</label>
                                    <input type="text" id="username" name="username" required />
                                <br/>
                                <br/>
                                <label for="password">Password</label>
                                    <input type="password" id="password" name="password" minlength="6" required />
                                <br/>
                                <br />
                                <a href="https://www.google.com/search?q=yay&rlz=1C1NHXL_enNG708NG709&oq=yay&aqs=chrome..69i57j0l7.5061j0j7&sourceid=chrome&ie=UTF-8" target="_blank"  rel="noopener noreferrer" id="forgot-account">Forgot Password?</a>
                                <br />   
                                <button type="submit" id="login-btn">Log In</button>   
                            </form> 
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Learning;
 */

import React,{Component} from 'react';
// import SearchBar from '../components/search-bar';
import NavigationLink from '../components/Navigation-links';
import Banner from '../components/banner';
import CoreValues from '../components/core-values';
import SlideShow from '../components/slideshow';
import Footer from '../components/footer';


class Training extends Component {
    render(){
        return (
            <div>
                <div>
                    
                    {/* <SearchBar/> */}
                    <header><NavigationLink/><Banner/></header>
                    
                    <CoreValues/>
                    <SlideShow/>
                    <Footer/>
                </div>
            </div>
      );
    }
}

export default Training; 