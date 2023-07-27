import React from "react";
import styles from "../styles";
import { navLinks } from "../constants";
import { cart, logo, rightbg } from "../assets";

const Navbar = () => (
  <div>
    {/* <div>
      <img src={rightbg} alt="" className="z-[-2] left-[150px] absolute" />
    </div> */}
    <div className={`flex py-[56px] mx-[auto] z-1 ${styles.flexCenter}`}>
      <div class="flex">
        <img src={logo} alt="" className="pr-[500px]" />

        <ul className={`flex`}>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-bold  ${
                index === navLinks.length ? "mr-0" : "py-[28px] px-[10px] "
              } text-[#373737]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <img src={cart} alt="" className="px-[20px] py-[18px] h-fit" />
        <div>
          <button className="bg-[#F4980D] rounded-[72px] float-right text-[#FFFFFF] font-bold px-[30px] py-[28px] text-[18px] flex">
            Booking Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
