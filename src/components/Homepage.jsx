import React from "react";
import { arrow, topfood } from "../assets";
import styles from "../styles";

const Homepage = () => (
  <div className={`${styles.flexCenter}`}>
    <div>
      <h1 className="text-[#4C4C4C] font-bold text-[40px]">
        Your Favourite Food <br /> Delivered Hot & <br /> Fresh
      </h1>
      <p className="text-[#828282] font-semibold text-[21px] py-[30px]">
        Healthy switcher chefs do all the prep work, like <br /> peeding,
        chopping & marinating, so you can cook <br /> a fresh food.
      </p>
      <button className="rounded-full text-[#FFFFFF] flex bg-[#FE9E0D] px-[55px] py-[25px] text-[18px] font-bold">
        Order Now
        <img src={arrow} alt="" class="pt-[3px] pl-[20px]" />
      </button>
    </div>
    <div>
      <img src={topfood} alt="" className="h-[880px]" />
    </div>
  </div>
);

export default Homepage;
