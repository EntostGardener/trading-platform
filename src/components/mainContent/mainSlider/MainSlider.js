"use client";

import styles from "./MainSlider.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import useWindowSize from "@/hook/useWindowSize";

const sliderData = [
  { id: 0, src: "/images/homePage.jpeg" },  // Correct relative path
  { id: 1, src: "/images/trading.jpeg" },   // Correct relative path
];

export default function MainSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [width, height] = useWindowSize();

  const handleChange = (i) => {
    setActiveTab(i);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.bunner}>
        <Image
          src={sliderData[activeTab].src}
          priority={true}
          alt="bunner"
          width={width}  // If you want to use the window size, you should verify it's passed correctly
          height={height} // Same as above
        />
      </div>
      <div className={styles.radios}>
        {sliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.sliderRadio}
              style={{ backgroundColor: activeTab === index ? "white" : "" }}
              onClick={() => handleChange(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}