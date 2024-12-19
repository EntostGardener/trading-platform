import React from 'react';
import Image from 'next/image';






export const Learn = () => {
  return (
    <div>
      <Image 
        src={"/images/trading.jpeg"}
        alt="Learn Trading" 
        layout="responsive" 
        width={500} 
        height={300} 
      />
    </div>
  );
};