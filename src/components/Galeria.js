import React from 'react';
import ImageGallery from 'react-image-gallery';

class Galeria extends React.Component {
  render() {
    const images = [
      {
        original: '/images/img.jpg',
        thumbnail: '/images/img.jpg',
      },
      {
        original: '/images/img3.jpg',
        thumbnail: '/images/img3.jpg'
      },
      {
        original: '/images/img4.jpg',
        thumbnail: '/images/img4.jpg'
      }
    ]
    return (
      <div className="galeria">
        <div className="container">
          <h3>Galería</h3>
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }
}

export default Galeria;
