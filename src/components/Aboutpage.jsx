import React from "react";
import { bottomfood, play } from "../assets";

const Aboutpage = () => (
  <div class="flex z-1">
    <div>
      <img src={bottomfood} alt="" />
    </div>
    <div>
      <span className={`text-[#F4980D] font-bold text-[17px]`}>About</span>
      <h1 className={`text-[#4C4C4C] text-[40px] font-bold`}>
        Food Is An Important <br /> Part Of A Balanced <br /> Diet
      </h1>
      <p className={`text-[21px] text-[#828282] font-semibold`}>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>
      <p
        className={`text-[21px] text-[#828282] font-semi
      bold pt-[10px]`}
      >
        Non tincidunt magna non et elit. Dolor turpis molestie <br /> dui magnis
        facilisis at fringilla quam.
      </p>
      <div className={`flex pt-[40px]`}>
        <button
          className={`bg-[#FE9E0D] text-[#FFFFFF] rounded-full px-[50px] py-[0px] font-bold `}
        >
          Learn More
        </button>
        <button
          className={`flex ml-[30px] h-[70px] leading-[70px] font-semibold text-[#515151]`}
        >
          <img src={play} alt="" className={`h-[70px] `} />
          <span className={`ml-[15px]`}>Watch Video</span>
        </button>
      </div>
    </div>
  </div>
);

export default Aboutpage;
