import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
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
];

function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <Carousel
        selectedItem={activeSlide}
        onChange={handleSlideChange}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={1000}
        stopOnHover
        swipeable
      >
        {images.map((slide, index) => (
          <div key={index}>
            <img src={slide.imgPath} alt={slide.label} />
            <p className="legend">{slide.label}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
