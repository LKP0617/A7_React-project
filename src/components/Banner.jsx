import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const desktopImages = [
  "https://i.imgur.com/Zhn35kc.png",
  "https://i.imgur.com/cb7W3nW.png",
  "https://i.imgur.com/OBn3SYO.png"
];

const mobileImages = [
  "https://i.imgur.com/HrazmNY.png",
  "https://i.imgur.com/jQ5dt08.png",
  "https://i.imgur.com/jRaiAVE.png"
];

function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Carousel>
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
