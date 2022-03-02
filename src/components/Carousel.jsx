import React from 'react';
import '../sass/components/Carousel.scss';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Carousel() {
  
  return<ImageSlider slides={SliderData} />;


    
}

export default Carousel;
