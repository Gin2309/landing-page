import React from "react";
import styles from "../styles";

const Contact = () => (
  <div className={`mx-[auto] justify-center`}>
    <h1
      className={`text-[#4C4C4C] text-center text-[40px] font-bold py-[25px] mt-[150px]`}
    >
      Have Question In Mind? <br />
      Let Us Help You
    </h1>
    <div className="flex mx-[auto] justify-center bg-[#FFF] max-w-xl rounded-[75px] py-[20px] px-[20px] mt-[70px]">
      <p className={`text-[#8D8D8D]  text-[20px] mr-[200px] leading-[54px]`}>
        yourmail@gmail.com
      </p>
      <button className="  bg-[#FE9E0D] rounded-full px-[45px]  py-[15px] text-[#FFF]  font-bold">
        Submit
      </button>
    </div>
  </div>
);

export default Contact;
