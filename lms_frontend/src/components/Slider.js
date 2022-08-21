import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img
          width={'100%'}
          
          className="d-block w-100"
          src="Frame 1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={'100%'}

          className="d-block w-100"
          src="Frame 2.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;