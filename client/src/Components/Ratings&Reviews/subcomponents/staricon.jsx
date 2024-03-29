import React from 'react';

export default function StarIcon({ percent, index, starId }) {
  return (
    <svg
      version="1.1"
      id={`Layer_${index}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 526.673 526.673"
      style={{ enableBackground: 'new 0 0 526.673 526.673' }}
      xmlSpace="preserve"
      width="20px"
      data-star-id={starId}>
      <defs>
        <linearGradient id={`partial_${index}`}>
          <stop offset={`${percent}%`} stopColor="#FF9900" />
          <stop offset={`${percent}%`} stopColor="white" />
        </linearGradient>
      </defs>
      <path d="M526.673,204.221l-195.529-7.76L263.337,12.885l-67.798,183.577L0,204.221l153.635,121.202l-53.048,188.365l162.75-108.664l162.75,108.664l-53.048-188.365L526.673,204.221z" fill="#DB4914" stroke="#DB4914" strokeWidth="10px" />
      <path
        fill={`url(#partial_${index})`}
        d="M392.683,467.808l-129.346-86.356L133.99,467.808
        l42.163-149.692L54.058,221.779l155.404-6.163l53.875-145.885l53.885,145.885l155.394,6.163l-122.096,96.337L392.683,467.808z" data-star-id={starId} />
    </svg>
  );
}
