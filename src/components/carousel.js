import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';


const Wrapper = styled.div`
width: 100%;
`;

const Page = styled.div`
width: 100%;
`;

export default class Carousel extends React.Component {
render() {
    return(
        <Wrapper>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                dots={true}
            >
            <Page>Page1</Page>
            <Page>Page2</Page>
            <Page>Page3</Page>

            </Slider>
        </Wrapper>
    );
}

}

  

  
