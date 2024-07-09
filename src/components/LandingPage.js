import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-purple-200">
      <main className="flex-grow w-full text-center p-6 text-black">
        <h1 className="text-4xl font-bold mt-6">
          Your <span className="text-purple-500">Hobby</span>, Your <span className="text-blue-500">Community</span>...
        </h1>
        <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg">Get Started</button>
        <img
          src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg"
          alt="hobbies"
          className="mt-10 mb-10 w-full max-w-4xl mx-auto"
        />
      </main>
    </div>
  );
};

export default LandingPage;
