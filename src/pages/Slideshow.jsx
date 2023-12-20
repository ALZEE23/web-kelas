// Slideshow.js

import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

const Slideshow = ({ images, selectedImageIndex, handleClose }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Modal show={true} onHide={handleClose} dialogClassName="modal-lg">
      <Modal.Body>
        <Carousel activeIndex={currentIndex} onSelect={handleSlideChange}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image.image} alt={`Gambar ${image.caption}`} className="img-fluid rounded" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="btn btn-primary" onClick={handleClose}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Slideshow;
