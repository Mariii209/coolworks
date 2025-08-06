import React from "react";

export default function CheckIcon({ style, className = "" }) {
  return (
    <div className={`CheckIcon ${className}`} style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M15.8966 7.54169C16.2296 9.17597 15.9923 10.875 15.2242 12.3555C14.4561 13.836 13.2037 15.0084 11.6758 15.6772C10.1479 16.3461 8.43693 16.4709 6.82815 16.0309C5.21937 15.5909 3.81005 14.6127 2.83521 13.2594C1.86038 11.9061 1.37895 10.2595 1.47122 8.59416C1.56349 6.92885 2.22388 5.34551 3.34226 4.10817C4.46063 2.87083 5.96939 2.0543 7.61693 1.79473C9.26448 1.53516 10.9512 1.84825 12.3958 2.68179"
          stroke="currentColor"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.5625 8.27085L8.75 10.4584L16.0417 3.16669"
          stroke="currentColor"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
