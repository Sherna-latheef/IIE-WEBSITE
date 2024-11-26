/* eslint-disable react/prop-types */
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageGallery = ({ images }) => {
  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Image src={image.src} alt={image.alt} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Gallery = () => {
  const companyImages = [
    { src: 'gallerpic1.jpeg', alt: 'pic1' },
    { src: 'gallerypic2.jpeg', alt: 'pic2' },
    { src: 'gallerypic3.jpeg' , alt: 'pic3' },
    { src: 'gallerypic4.jpeg', alt: 'pic4' },
    { src: 'gallerypic5.jpeg', alt: 'pic5' },
    { src: 'gallerypic6.jpeg', alt: 'pic6' },
    // Add more images here
  ];

  return (
    <div style={{  textAlign: 'center' }} className='mt-5'>
      {/* Google Tag Manager Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZ0T7KJBXW');
        `}
      </script>

      <h1 className='gallerypics'> Gallery</h1>
      <ImageGallery images={companyImages} />
    </div>
  );
};

export default Gallery;
