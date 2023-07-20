import React from "react";
import { delivery, knife, pointer } from "../assets";

const Work = () => (
  <div>
    <div className={` mx-[auto] justify-center`}>
      <p
        className={`text-[#F4980D] font-bold text-center pt-[150px] text-[17px]`}
      >
        Work
      </p>
      <h1
        className={`text-[#4C4C4C] text-center text-[40px] font-bold py-[25px]`}
      >
        How it Works
      </h1>
      <p className={`text-[21px] text-[#828282] font-semibold text-center  `}>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt <br /> magna non
        et elit. Dolor turpis molestie dui <br /> magnis facilisis at fringilla
        quam.
      </p>
    </div>
    <div className={`flex pt-[100px] mx-[auto] justify-center`}>
      <div
        className={`text-center max-w-[250px] bg-[#FFF] rounded-[15px] py-[20px] `}
      >
        <img
          src={knife}
          alt=""
          className={`mx-[auto] justify-center w-[75px]`}
        />
        <h2 className={`text-[#505050] font-bold py-[30px] text-[18px]`}>
          Pick Meals
        </h2>
        <p className={`text-[#474747] font-semibold text-center text-[14px]`}>
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis
          elementum interdum facilisi bibendum.
        </p>
      </div>
      <div
        className={`text-center max-w-[250px] bg-[#FFF] rounded-[15px] mx-[40px] py-[20px]`}
      >
        <img
          src={pointer}
          alt=""
          className={`mx-[auto] justify-center w-[75px]`}
        />
        <h2 className={`text-[#505050] font-bold py-[30px] text-[18px]`}>
          Choose How Often
        </h2>
        <p className={`text-[#474747] font-semibold text-center text-[14px]`}>
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et
        </p>
      </div>
      <div
        className={`text-center max-w-[250px] bg-[#FFF] rounded-[15px] py-[20px]`}
      >
        <img
          src={delivery}
          alt=""
          className={`mx-[auto] justify-center w-[75px]`}
        />
        <h2 className={`text-[#505050] font-bold py-[30px] text-[18px]`}>
          Fast Deliveries
        </h2>
        <p className={`text-[#474747] font-semibold text-center text-[14px]`}>
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum
        </p>
      </div>
    </div>
  </div>
);

export default Work;
