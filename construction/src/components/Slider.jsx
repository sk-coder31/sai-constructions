import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image01 from "../assets/image01.jpg";
import image02 from "../assets/image02.jpg";
import image03 from "../assets/image03.jpg";
import image04 from "../assets/image04.jpg";
import image05 from "../assets/image05.jpg";
import image06 from "../assets/image06.jpg";
import image07 from "../assets/image07.jpg";
import image08 from "../assets/image08.jpg";
import image09 from "../assets/image09.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";

const Slider = () => {
  // Array of imported images
  const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12
  ];

  return (
    <div className="w-full p-6 bg-white"> {/* Full width and background color */}
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          gap: '1.5rem',
          autoplay: true,
          interval: 1500,
          padding: '2rem', // Adds padding to slides for more spacing
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        aria-label="Responsive Splide Slider"
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg" // Increased height for bigger images
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
