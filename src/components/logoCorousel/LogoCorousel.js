"use client"; 
import React from "react";
import Image from "next/image";
import styles from "./LogoCorousel.module.css"; 

const logos = [
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
];

const LogoCorousel = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.animateMarquee}>
        {logos.concat(logos).map((src, index) => (
          <div key={index} className={styles.logo}>
            <Image 
              src={src} 
              alt={`Logo ${index + 1}`} 
              width={100} 
              height={100} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCorousel;