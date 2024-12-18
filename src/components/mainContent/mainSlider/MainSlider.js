"use client";
import styles from "./MainSlider.module.css";
import {useEffect, useState} from "react";
import Image from "next/image";
import Image1 from "../../../../public/images/banerImgs/banner1.png";
import Image2 from "../../../../public/images/banerImgs/banner2.png";
import useWindowSize from "@/hook/useWindowSize";

const sliderData = [
  {id: 0, src: Image1},
  {id: 1, src: Image2},
];

export default function MainSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [width, height] = useWindowSize();

  const handleChange = (i) => {
    setActiveTab(i);
  };

  // setInterval(() => {
  //   const autoChangeTab = () => {
  //     let num = activeTab;

  //     if (sliderData.length === activeTab + 1) {
  //       num = 0;
  //     } else {
  //       num++;
  //     }
  //     return num;
  //   };

  //   let update = autoChangeTab();

  //   setActiveTab(update);
  // }, 10000);

  return (
    <div className={styles.slider}>
      <div className={styles.bunner}>
        <Image
          src={sliderData[activeTab].src}
          priority={true}
          alt="bunner"
          width={width}
        />
      </div>
      <div className={styles.radios}>
        {sliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.sliderRadio}
              style={{backgroundColor: activeTab === index ? "white" : ""}}
              onClick={() => handleChange(index)}></div>
          );
        })}
      </div>
    </div>
  );
}
