import React from "react";
import styles from "./styles";
import {
  Navbar,
  Homepage,
  Aboutpage,
  Work,
  Testimonial,
  Contact,
  Footer,
} from "./components";

const App = () => (
  <div className={`bg-gray-100`}>
    <div>
      <div>
        <Navbar />
        <Homepage />
        <Aboutpage />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>

    <div>
      <div className={`${styles.boxWidth}`}></div>
    </div>
  </div>
);

export default App;
