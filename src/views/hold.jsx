import React,{Component} from 'react';
import SearchBar from '../components/search-bar';
import NavigationLink from '../components/Navigation-links';
import Banner from '../components/banner';
import CoreValues from '../components/core-values';
import SlideShow from '../components/slideshow';


class Training extends Component {
    render(){
        return (
            <div>
                <div>
                    <SearchBar/>
                    <NavigationLink/>
                    <Banner/>
                    <CoreValues/>
                    <SlideShow/>
                   
                </div>
            </div>
      );
    }
}

export default Training;