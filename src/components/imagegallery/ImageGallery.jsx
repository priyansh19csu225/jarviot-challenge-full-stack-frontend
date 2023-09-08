import React from 'react';
import image1 from '../../assets/image5.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image4.png';

import './ImageGallery.css';

const ImageGallery = () => {
 

  const images = [
    { src: image1, rotate: 'rotate-left' },
    { src: image2, rotate: 'rotate-center' },
    { src: image3, rotate: 'rotate-right' },
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container  ${image.rotate}`}
        
        >
          <img src={image.src} alt={`Image ${index + 1}`} />
        </div>
      ))}
     
    </div>
  );
};

export default ImageGallery;

