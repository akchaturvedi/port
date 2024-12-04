import React from "react";
import clone from "../assets/amazon-clone.webp";
import ecommerce from "../assets/ecommerce.avif";
import foodapp from "../assets/foodapp.jpeg";

const PortFolio = () => {
  const portFolios = [
    {
      id: 1,
      src: foodapp,
      demo: "https://food-delevery-website-4qpq.vercel.app/",
      code: "https://github.com/akchaturvedi/food-delevery-website",
    },
    {
      id: 2,
      src: ecommerce,
      demo: "https://akchaturvedi.github.io/E-Commerse-website/index.html",
      code: "https://github.com/akchaturvedi/E-Commerse-website",
    },
    {
      id: 3,
      src: clone,
      demo: "https://akchaturvedi.github.io/amazon-clone/",
      code: "https://github.com/akchaturvedi/amazon-clone",
    },
  ];

  return (
    <div
      name="portFolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8  mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects I've Built
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>
        <ul className="mb-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 sm:px-0">
          {portFolios.map(({ id, src, demo, code }) => (
            <li
              key={id}
              className="flex flex-col items-center shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-gray-900"
            >
              <img
                src={src}
                alt="Project"
                className="w-full h-56  object-cover duration-300 hover:scale-105 p-4"
              />
              <div className="flex justify-center items-center w-full space-x-4 p-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center duration-200 hover:scale-105"
                >
                  Live Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center duration-200 hover:scale-105"
                >
                  Source Code
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortFolio;
