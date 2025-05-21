import React from 'react';

const HomePage = () => {
  return (
    <div className="relative mt-10 bg-white overflow-hidden font-[Poppins]">
      <Product/>
      {/* Animated colorful background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full opacity-70 animate-pulse-slow -z-10" style={{clipPath: 'ellipse(60% 70% at 30% 30%)'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full opacity-60 animate-bounce-slow -z-10" style={{clipPath: 'ellipse(50% 60% at 70% 70%)'}}></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-50 animate-spin-slow -z-10"></div>

      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-orange-500">Company Name</div>
        <nav className="space-x-8 text-gray-700 font-semibold">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Projects</a>
          <a href="#" className="hover:text-orange-500">Our Mission</a>
          <a href="#" className="hover:text-orange-500">Menu</a>
        </nav>
        <button className="ml-4 p-2 rounded-full border border-gray-300 hover:border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
          </svg>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-30">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Online <br /> Pharmacy &amp; <br /> Medical Store
          </h1>
          <p className="text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Get Started!
          </button>
          <div className="flex space-x-2 mt-4">
            <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
            <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
            <span className="w-3 h-3 bg-indigo-300 rounded-full"></span>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          {/* Illustration placeholder */}
          <img
            src="https://media.istockphoto.com/id/1313459933/vector/online-pharmacy-concept.jpg?s=612x612&w=0&k=20&c=epIc_fall"
            alt="Online Pharmacy Illustration"
            className="w-full max-w-md"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
