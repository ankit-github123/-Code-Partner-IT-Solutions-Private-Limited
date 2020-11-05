import React, { useState } from "react";
import ReactDOM from "react-dom";
import Panel from "./Panel";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import pic1 from "../images/revolt-164_6wVEHfI-unsplash.jpg"
import pic2 from "../images/maksim-larin-NOpsC3nWTzY-unsplash.jpg"
import pic3 from "../images/camila-damasio-mWYhrOiAgmA-unsplash.jpg"
import "./slider.css"
function Slider() {
  const [value, setValue] = useState(0);
  function onChange(value) {
    setValue(value);
  }
  return (
    <div className="App">
      <Carousel
        value={value}
        onChange={onChange}
        
        infinite
        slidesPerPage={1}
      >
        <Panel pic={pic1}/>
        <Panel pic={pic2}/>
        <Panel pic={pic3}/>
        
      </Carousel>
      <Dots value={value} onChange={onChange} number={3} />
    </div>
  );
}

export default Slider;