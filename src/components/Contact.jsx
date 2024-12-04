import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-cyan-500">
            Contact
          </p>
          <p className="py-4 text-lg font-light">
            Submit the form below to get in touch with me. I'll respond as soon
            as possible!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/raeqnoka"
            method="POST"
            className="flex flex-col w-full lg:w-2/3 bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 mb-4 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="p-4 mb-4 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={6}
              className="p-4 mb-6 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto rounded-md hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
