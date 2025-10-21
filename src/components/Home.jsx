import React from "react";

const Home = () => {
  return (
    <main className="py-20">
      <section id="home" className="h-screen flex items-center">
        <div className="w-full flex items-center justify-start">
          <div className="flex flex-col items-start p-6 max-w-4xl">
            <div className="bg-transparent backdrop-blur-3xl rounded-full text-white">
              <h4 className="flex justify-center items-center  rounded-full p-3">
                Sustainable Farming Tech
              </h4>
            </div>

            <h6 className="font-bold text-7xl text-white">
              Bringing Innovation to <br></br> Your Farming Journey
            </h6>
            <h2 className="text-white pt-6  pb-6 text-xl">
              From Precision agriculture to sustainable practices, we help yo to
              grow <br></br>
              efficiently and profitably. Join us in transforming the way your
              farm!
            </h2>
            <div>
              <button className="bg-lime-300 rounded-full flex itemes-center justify-center p-3 cursor-pointer gap-2">
                Get sarted <i className="ri-arrow-right-line bg-black rounded-full w-6 text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="h-screen flex items-center justify-center">
        Marketplace
      </section>
      <section id="community" className="h-screen flex items-center justify-center">
        Community
      </section>

      <section id="about" className="h-screen flex items-center justify-center">
        <h2>About Us</h2>
        <p>
          BioFarm is dedicated to promoting eco-friendly agricultural practices
          through innovative technology and community engagement.
        </p>
      </section>
    </main>
  );
};

export default Home;
