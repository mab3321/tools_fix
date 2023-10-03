import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
  const [autoplay, setAutoplay] = useState(true);
  const imagesData = props.imagesData;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: autoplay,
    onMouseEnter: () => setAutoplay(false),
    onMouseLeave: () => setAutoplay(true),
  };

  return (
    <Carousel {...settings}>
      {imagesData.map((image) => (
        <Wrap key={image.id}>
          <a href={image.Product_link}>
            <img src={image.Image_src} alt={image.Product_Title} />
          </a>
          <ImageOverlay>
            <ImageName>{image.Product_Title}</ImageName>
            <ImageDescription>{image.Categories}</ImageDescription>
          </ImageOverlay>
        </Wrap>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  // Rest of your styling...

  .slick-center img {
    transform: scale(1.08); // Increase the size of the center slide
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 30%;
  a {
    img {
      width: auto;
      height: auto; /* Maintain aspect ratio */
    }
  }
`;

const ImageOverlay = styled.div`
  position: relative;
  top: 0;
  left: -30%;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.1s;
  border-radius: 4px;
  z-index: 1;

  ${Wrap}:hover & {
    opacity: 1;
  }
`;

const ImageName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ImageDescription = styled.div`
  font-size: 16px;
`;

export default ImgSlider;
