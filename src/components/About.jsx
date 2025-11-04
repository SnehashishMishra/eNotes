import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-start min-h-[70vh] p-8">
      <div className="w-full max-w-[800px] bg-white rounded-3xl shadow-lg p-10">
        <h2 className="mb-6 text-center font-bold text-3xl">
          About <span className="text-blue-600">E-Notes</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          <strong className="font-semibold">E-Notes</strong> is a sleek and
          secure digital note-taking app. Organize, create, and manage your
          notes effortlessly — anytime, anywhere.
        </p>

        <h4 className="mt-6 mb-4 font-semibold text-xl">✨ Key Features</h4>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white">
            Secure Login
          </span>
          <span className="px-4 py-1 rounded-full text-sm bg-green-600 text-white">
            Encrypted Passwords
          </span>
          <span className="px-4 py-1 rounded-full text-sm bg-cyan-400 text-black">
            Personal Notes
          </span>
          <span className="px-4 py-1 rounded-full text-sm bg-yellow-400 text-black">
            Tagging System
          </span>
          <span className="px-4 py-1 rounded-full text-sm bg-gray-600 text-white">
            Auto Timestamps
          </span>
          <span className="px-4 py-1 rounded-full text-sm bg-black text-white">
            Responsive UI
          </span>
        </div>

        <h4 className="font-semibold text-xl">Why E-Notes?</h4>
        <ul className="list-disc ml-6 mb-6 text-gray-700 leading-relaxed">
          <li>Fast, lightweight, and intuitive interface.</li>
          <li>Secure JWT authentication keeps your data safe.</li>
          <li>Custom tags and timestamps for easy organization.</li>
          <li>
            Works seamlessly on all devices — desktop, tablet, and mobile.
          </li>
        </ul>

        <h4 className="font-semibold text-xl">Tech Stack</h4>
        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>Frontend:</strong> React.js + Vite + Tailwind CSS v4
          <br />
          <strong>Backend:</strong> Node.js + Express.js
          <br />
          <strong>Database:</strong> MongoDB with Mongoose
          <br />
          <strong>Security:</strong> JWT authentication + bcrypt.js
        </p>

        <h4 className="font-semibold text-xl">Contact</h4>
        <ul className="text-gray-700 leading-relaxed">
          <li>
            <strong>Developer:</strong> Snehashish Mishra
          </li>
          <li>
            <strong>Email:</strong> snehashishmishra18@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
