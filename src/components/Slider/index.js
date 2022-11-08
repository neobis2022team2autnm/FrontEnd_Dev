import React from "react";
import { data } from "../../assets/mock-data/data"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BiCheckCircle } from "react-icons/bi";

const Slider = () => {

  
  const sliderLeft = () => {
    const slider = document.getElementById("slider1");
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = 1956;
    } else {
      slider.scrollLeft = slider.scrollLeft - 450;
    }
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider1");
    if (slider.scrollLeft === 1956) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft = slider.scrollLeft + 450;
    }
  };

  return (
    <div className="px-5 py-28">
      <div className="reletive flex items-center">
        <SlArrowLeft
          className="hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-3xl"
          onClick={sliderLeft}
        />
        <div
          id="slider1"
          className="h-full w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((el) => (
            <div className="group inline-block relative ">
              <BiCheckCircle
                className=" text-[#F7F7F7] opacity-80 cursor-pointer text-6xl md:text-4xl hover:opacity-100  absolute z-20 mr-auto ml-[85%] md:ml-[80%] lg:top-[5%] lg:ml-[78%] lg:text-5xl md:top-[5%] top-[2%] left-0 right-0 group-hover:scale-105 ease-out duration-300 "
              />
             
              <img
                className=" brightness-[80%] w-[450px] md:w-[220px] lg:w-[270px]  rounded-xl p-1 md:p-2 object-fill  cursor-pointer group-hover:scale-105 ease-out duration-300 "
                src={el.img}
                alt="/"
              />
              
              <span className="  z-20 font-bold text-2xl md:text-sm lg:text-base  max-sm:text-2xl text-[#F7F7F7] bottom-[8%]  right-0 left-0 text-center  absolute  group-hover:scale-105 ease-out duration-300  ">
                {el.text}
              </span>
            </div>
          ))}
        </div>
        <SlArrowRight
          className=" hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-3xl"
          onClick={sliderRight}
        />
      </div>
    </div>
  );
};

export default Slider;
