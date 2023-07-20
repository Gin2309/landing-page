import React from "react";
import { person, star } from "../assets";

const Testimonial = () => (
  <div>
    <div className={`mx-[auto] justify-center text-center`}>
      <p className={`text-[#F4980D] font-bold pt-[200px] text-[17px]`}>
        Testimonial
      </p>

      <h1
        className={`text-[#4C4C4C] text-center text-[40px] font-bold py-[25px]`}
      >
        What They Are Saying
      </h1>
      <p className={`text-[#828282] font-semibold`}>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>
    </div>
    <div
      className={`mx-[auto] justify-center text-center max-w-lg bg-[#fff] rounded-[15px] mt-[80px]`}
    >
      <img
        src={person}
        alt=""
        className={`mx-[auto] justify-center pt-[10px] h-[85px] mb-[20px]`}
      />
      <p className={`text-[#515151] font-semibold`}>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>
      <div
        className={`flex mx-[auto] justify-center h-[25px] my-[25px] space-x-[10px]`}
      >
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p className={`text-[#1C1C1C] font-semibold pb-[25px] text-[18px]`}>
        John Doe
      </p>
    </div>
  </div>
);

export default Testimonial;
