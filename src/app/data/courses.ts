import react from "../../../public/react.svg";
import nodejs from "../../../public/nodejs.svg";
import typescript from "../../../public/typescript.svg";
import mongodb from "../../../public/mongodb.svg";
import mysql from "../../../public/mysql.svg";
import css from "../../../public/css.svg";
import html from "../../../public/html.svg";

interface Course {
  src: string;
  title: string;
}
export const courses: Course[] = [
  {
    src: react,
    title: "React - The library for web and native user interfaces",
  },
  {
    src: nodejs,
    title: "Nodejs - Cross-platform JavaScript runtime environment",
  },
  {
    src: typescript,
    title: "Typescript - TypeScript is JavaScript with syntax for types.",
  },
  {
    src: mongodb,
    title:
      "Mongodb - MongoDB is a document database used to build highly available and scalable internet applications",
  },
  {
    src: mysql,
    title:
      "MySQL - MySQL is an open-source relational database management system.",
  },
  {
    src: css,
    title: "CSS - CSS is the language we use to style an HTML document.",
  },
  {
    src: html,
    title: "HTML - HTML is the standard markup language for Web pages",
  },
];
