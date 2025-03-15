import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const BannerCarousel = ({ desktopImages, mobileImages, interval = 3000 }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Carousel interval={interval} className="banner-carousel">
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
