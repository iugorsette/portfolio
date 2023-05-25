import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";

import react from "../../../public/react.svg";
import nodejs from "../../../public/nodejs.svg";
import typescript from "../../../public/typescript.svg";
import mongodb from "../../../public/mongodb.svg";
import mysql from "../../../public/mysql.svg";
import css from "../../../public/css.svg";
import html from "../../../public/html.svg";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      //   showArrows={false}
      showIndicators={false}
      centerMode
      centerSlidePercentage={100 / 5} // Ajusta a largura de cada slide para ocupar 1/5 do carrossel
      swipeable={false} // Desabilita o swipe para evitar a mudança de slide parcial
      className="w-5/6 h-36"
    >
      <div className="carousel-slide">
        <Image src={react} alt="React -  Framework front-end" />
      </div>
      <div className="carousel-slide">
        <Image src={nodejs} alt="Nodejs - " />
      </div>
      <div className="carousel-slide">
        <Image
          src={typescript}
          alt="Typescript - Superset da linguagem JavaScript"
        />
      </div>
      <div className="carousel-slide">
        <Image src={mongodb} alt="Mongodb" />
      </div>
      <div className="carousel-slide">
        <Image src={mysql} alt="MySQL" />
      </div>
      <div className="carousel-slide">
        <Image src={css} alt="CSS" />
      </div>
      <div className="carousel-slide">
        <Image src={html} alt="HTML" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
