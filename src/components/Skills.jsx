import React from "react";
import html from "../assets/html2.png";
import css from "../assets/css.jpg";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import linux from "../assets/linux.png";
import c from "../assets/c++.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";
import node from "../assets/node.png";
import express from "../assets/Expressjs.jpg";
import sql from "../assets/sql.png";
import next from "../assets/next.png";
import postgresql from "../assets/postgre.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: git,
      title: "GIT",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: express,
      title: "Express.js",
      style: "shadow-gray-600",
    },
    {
      id: 11,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 12,
      src: sql,
      title: "SQL",
      style: "shadow-blue-600",
    },
    {
      id: 13,
      src: postgresql,
      title: "Postgresql",
      style: "shadow-blue-600",
    },
    {
      id: 14,
      src: next,
      title: "Next.js",
      style: "shadow-gray-600",
    },
    {
      id: 15,
      src: linux,
      title: "Linux",
      style: "shadow-blue-300",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto pl-4 pb-0 md:p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="pt-6 pb-2 sm:pb-6">
            These are the technologies, I have learned with{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 sm:py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
