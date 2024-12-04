import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg pl-4 pb-0 md:p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-0 md:mt-20">
          Hello, I’m Adesh Kumar Chaturvedi 👋, a passionate web developer 🌐
          with a focus on creating seamless web experiences and solving
          intricate problems through code. I hold a Bachelor of Technology 🎓 in
          Computer Science and Information Technology.
        </p>
        <br />
        <p className="text-xl">
          Throughout my journey, I’ve honed my skills in both frontend and
          backend technologies 💻. From building engaging user interfaces with
          **HTML/CSS** to developing robust server-side applications with
          **Node.js** and **Express.js**, I enjoy every phase of the development
          lifecycle ⚙️. My expertise goes beyond just coding; I value
          collaboration 🤝, continuous learning 📚, and the ability to innovate
          💡. I’m particularly drawn to the MERN stack, where I integrate
          multiple technologies to build scalable, dynamic applications that
          meet user needs and exceed expectations 🚀.
        </p>
      </div>
    </div>
  );
};

export default About;
