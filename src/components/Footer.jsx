import React from "react";
import { footerCol1, footerCol2, footerCol3, logoLinks } from "../constants";
import styles from "../styles";
import { footerlogo } from "../assets";

const Footer = () => (
  <div className={`${styles.flexCenter} py-[150px]`}>
    <div>
      <img src={footerlogo} alt="" className="pr-[100px]" />
      {/* <ul className="flex">
        {logoLinks.map((logo, index) => (
          <li key={logo.id}>
            <img src={logo.img} alt="" />
          </li>
        ))}
      </ul> */}
      {/* {logoLinks.map((logo, index) => (
        <div key={logo.id}>
          <img src={logo.img} alt="" />
        </div>
      ))} */}
    </div>
    <ul>
      {footerCol1.map((footer, index) => (
        <li
          key={footer.id}
          className={`cursor-pointer font-bold  text-[14px] ${
            index === footerCol1.length ? "mr-0" : "pb-[5px]  px-[10px]"
          } text-[#4C4C4C]`}
        >
          <a href={`${footer.id}`}>{footer.title}</a>
        </li>
      ))}
    </ul>
    <ul>
      {footerCol2.map((footer, index) => (
        <li
          key={footer.id}
          className={`cursor-pointer font-bold text-[14px] ${
            index === footerCol2.length ? "mr-0" : "pb-[5px]  px-[10px]"
          } text-[#4C4C4C]`}
        >
          <a href={`${footer.id}`}>{footer.title}</a>
        </li>
      ))}
    </ul>
    <ul>
      {footerCol3.map((footer, index) => (
        <li
          key={footer.id}
          className={`cursor-pointer font-bold text-[14px] ${
            index === footerCol3.length ? "mr-0" : "pb-[5px]  px-[10px]"
          } text-[#4C4C4C]`}
        >
          <a href={`${footer.id}`}>{footer.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
