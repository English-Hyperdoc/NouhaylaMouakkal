import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WhatILearn from './WhatILearn'; // Assurez-vous que le chemin d'importation est correct
import Image1 from '../../Assets/GEIW/1.jpg';
import Image2 from '../../Assets/GEIW/2.jpg';
import Image3 from '../../Assets/GEIW/3.jpg';
import Image5 from '../../Assets/GEIW/5.jpg';
import Image6 from '../../Assets/GEIW/6.jpg';
import Image7 from '../../Assets/GEIW/7.jpg';
import Image8 from '../../Assets/GEIW/8.jpg';
import Image9 from '../../Assets/GEIW/9.jpg';

function MyExperience() {
  const carouselContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const carouselStyle = {
    width: '50%',
    height: '50%',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imgStyle}
            src={Image9}
            alt="Ninth slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Appel du composant WhatILearn */}
      <WhatILearn />
    </div>
  );
}

export default MyExperience;
