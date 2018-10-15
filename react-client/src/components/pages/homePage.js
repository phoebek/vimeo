import React, { Component } from 'react';
import Section from '../sectionComponent/section.js';
import Carousel from '../carouselComponent/carousel.js';

class HomePage extends Component {

  render() {
    return (
      <div>
        <Section imgUrls={['https://i.vimeocdn.com/video/595198868_505x160.jpg']}/>
        <Section imgUrls={['https://i.vimeocdn.com/video/589972810_530x315.jpg', 'https://i.vimeocdn.com/video/590587169_530x315.jpg']}/>
        <Carousel />

      </div>
    )
  }
}

export default HomePage;