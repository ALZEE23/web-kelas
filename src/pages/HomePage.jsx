import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import CodeImage from '../image/murid.png';
import Sampul from '../image/sampul.svg'
import Walas from '../image/frd.jpg'

import { useNavigate } from 'react-router-dom';
import ProjectComponent from '../components/ProjectComponent';

const HomePage = () => {
  let navigate = useNavigate();

  const galleryItems = [
    { id: 1, image: '/src/image/g1.jpg', caption: 'Ulang tahun Bu Diah' },
    { id: 2, image: '/src/image/g2.jpg', caption: '17 Agustus tahun 1945' },
    { id: 3, image: '/src/image/g3.jpg', caption: 'Bersama padons' },
    { id: 4, image: '/src/image/g4.jpg', caption: 'Lomba fashion show' },
    { id: 5, image: '/src/image/g1.jpg', caption: 'Deskripsi Gambar 5' },
    { id: 6, image: '/src/image/g2.jpg', caption: 'Deskripsi Gambar 6' },
    // Tambahkan item galeri sesuai kebutuhan Anda
  ];
  

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-1">
            <Col>
              <h1>
                WE ARE PPLG TWORU
                <br /> <span className='sub'>XI PPLG 2</span><br />
              </h1>
              <p>`` Explore the creativity and excitement of 11 PPLG 2 Batch 15 from SMKN 1 Ciomas on our website.
                Discover our works, fun moments, and the spirit of our group. Thank you for visiting! ``</p>

            </Col>
            <div className='content'>
              <img className='sampul' src={Sampul} alt="" />
              <img className='murid' src={CodeImage} alt="" />
            </div>
          </Row>
        </Container>
      </header>
      <div className="about w-100 min-vh-100" id='kursus'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center w-bold'>About Us <span className='turu'>PPLG TWORU</span></h1>
              <p className='text-center'>
                Kelas <span>XI PPLG 2</span> yang memiliki sebutan <span>PPLG TWORU</span>,<br />
                arti dari TWORU yaitu TWO untuk urutan kelas yaitu PPLG 2,<br />
                dan RU yaitu Rich and Unique
              </p>
            </Col>
          </Row>
          <Row className='isi'>
            <Col>
              <h1>34</h1>
              <p>Murid</p>
            </Col>
            <Col>
              <h1>17</h1>
              <p>Laki-Laki</p>
            </Col>
            <Col>
              <h1>17</h1>
              <p>Perempuan</p>
            </Col>
            <Col className='wls'>
              <img className='walas' src={Walas} alt="" />
              <p>Farid F<br />&#40;Wali Kelas&#41;</p>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate('/kelas')}>
                Lihat lebih banyak <i className='fa-solid fa-chevron-right ms-1'></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section project  */}
      <ProjectComponent />
      {/* Section project  */}
      <div className="galery w-100 min-vh-100" id='kursus'>
        <Container>
          <Row>
            <Col className='pt-3'>
              <h1 className='text-center w-bold'>Galery<span className='turu'>Barudak TWORU</span></h1>
            </Col>
          </Row>
          <Row className='pt-5'>  
            {galleryItems.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} alt={`Gambar ${item.id}`} />
                  <Card.Body>
                    <Card.Text>{item.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
