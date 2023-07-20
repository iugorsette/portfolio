import React from "react";
import Image from "next/image";
import { courses } from "../data/courses";

const CarouselComponent = () => {
  return (
    <div className="flex justify-center gap-5">
        {courses.map((course) => (
          <Image key={course.title} width={96} src={course.src} alt={course.title} />
        ))}
    </div>
  );
};

export default CarouselComponent;
