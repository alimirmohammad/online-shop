import React, { useState } from "react";
import styles from "./Slider.module.scss";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from "./Slide";

const Slider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let length;

  if (data) {
    length = data.length > 4 ? data.length - 3 : 1;
  }

  const goToPrevSlide = () => {
    if (data.length <= 4) return;
    if (activeIndex < 1) {
      setActiveIndex(length - 1);
    } else {
      setActiveIndex((index) => index - 1);
    }
  };

  const goToNextSlide = () => {
    if (data.length <= 4) return;
    if (activeIndex === length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((index) => index + 1);
    }
  };

  return (
    <div className={styles.Slider}>
      <LeftArrow goToNextSlide={goToNextSlide} />
      <div className={styles.Text}>
        <Slide activeIndex={activeIndex} data={data} />
      </div>
      <RightArrow goToPrevSlide={goToPrevSlide} />
    </div>
  );
};

export default Slider;
