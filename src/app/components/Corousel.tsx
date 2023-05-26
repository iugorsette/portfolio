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
  const imageSize = 96;
  return (
    <div className="flex justify-center gap-5">
      <div>
        <Image
          width={imageSize}
          src={react}
          alt="React - The library for web and native user interfaces"
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={nodejs}
          alt="Nodejs - Cross-platform JavaScript runtime environment"
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={typescript}
          alt="Typescript - TypeScript is JavaScript with syntax for types."
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={mongodb}
          alt="Mongodb - MongoDB is a document database used to build highly available and scalable internet applications"
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={mysql}
          alt="MySQL - MySQL is an open-source relational database management system."
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={css}
          alt="CSS - CSS is the language we use to style an HTML document."
        />
      </div>
      <div>
        <Image
          width={imageSize}
          src={html}
          alt="HTML - HTML is the standard markup language for Web pages"
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
