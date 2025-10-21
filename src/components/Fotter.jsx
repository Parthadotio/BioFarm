import React from 'react'

const Fotter = () => {
  return (
    <div className="p-4 text-black min-h-60">
      <div className="flex items-center justify-center font-poppins text-2xl font-normal">
        Biofarm
      </div>
      <div className="flex items-center justify-around gap-6 p-6 w-full h-full">
        <div className="bg-red-500 p-2 text-wrap">
          a Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Consequuntur laborum blanditiis natus illo iusto ex saepe quisquam,
          repellat cupiditate quasi veritatis ullam laudantium reprehenderit
          assumenda accusantium aut porro aliquam aliquid.
        </div>
        <div className="bg-violet-500 p-2 text-wrap">
          b Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis cumque excepturi suscipit adipisci saepe officia dicta
          quos rerum odit explicabo voluptates dolore facilis doloremque
          sapiente, asperiores expedita animi architecto aspernatur.
        </div>
        <div className="bg-yellow-300 p-2  text-wrap ">
          c Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          atque dolor iure repellat qui inventore velit repudiandae culpa
          excepturi dolores assumenda, doloremque beatae similique dicta?
          Debitis quasi unde vitae provident.
        </div>
        <div className="p-2 text-wrap">
          <h2>Contact</h2>
          info@biofarm.com 11-09897685
          <div className="flex gap-6 pt-2 text-black cursor-pointer">
            <i className="ri-facebook-circle-fill bg-white rounded-full h-10 w-10 flex items-center justify-center"></i>
            <i className="ri-twitter-x-fill  bg-white rounded-full h-10 w-10  flex items-center justify-center"></i>
            <i className="ri-youtube-line bg-white rounded-full h-10 w-10  flex items-center justify-center"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter