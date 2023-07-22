import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const RootContainer = styled("div")({
  position: "relative",
  maxHeight: 500,
  marginTop: "7.5rem",
});

const Image = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  transition: "opacity 500ms",
});

const Button = styled("button")({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "8px",
  height: "100%",
  transition: "background-color 200ms",
});

const PrevButton = styled(Button)({
  left: 0,
});

const NextButton = styled(Button)({
  right: 0,
});

//===============IMAGES======================

import img1 from "../assets/carrusel2/img1.jpg";
import img2 from "../assets/carrusel2/img2.jpg";
import img3 from "../assets/carrusel2/img3.jpg";
import img4 from "../assets/carrusel2/img4.jpg";
/* const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
]; */

function Carousel() {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextImageIndex((nextImageIndex + 1) % images.length);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setIsTransitioning(false);
      }, 500);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, nextImageIndex]);

  const goToPrevImage = () => {
    setNextImageIndex((currentImageIndex - 1 + images.length) % images.length);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  const goToNextImage = () => {
    setNextImageIndex((currentImageIndex + 1) % images.length);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <RootContainer>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        style={{
          opacity: isTransitioning ? 0 : 1,
        }}
      />

      <PrevButton onClick={goToPrevImage}>{"<"}</PrevButton>

      <NextButton onClick={goToNextImage}>{">"}</NextButton>
    </RootContainer>
  );
}

export default Carousel;
