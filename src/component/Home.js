import React from "react";

const Home = () => {
  return (
    <div id="home" class="bg-hero bg-cover ">
      <div class="relative w-full h-[760px]">
        <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-4 md:mb-0">
            <h1 class="text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
              Dhanotiya Flour Mill
            </h1>
            <p class="font-regular text-white text-xl mb-8 mt-4">
              One stop solution for flour and grinding services
            </p>
            <a
              href="#contactUs"
              class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
