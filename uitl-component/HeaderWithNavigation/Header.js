import React, { useState } from "react";
// import "./header.css";
import style from "./Header.module.scss";
import { sassFalse } from "sass";

const Header = ({ topHeader, prev, next, sliderIndex, lastIndex }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (action) => {
    //if action is prev
    setIsHover(true);

    //if action is next
  };

  const handleMouseLeave = (action) => {
    setIsHover(false);
  };

  const boxStyle = {};

  return (
    <header className={style.header}>
      <h1 className={style.h1}>{topHeader}</h1>
      <div className={style.button}>
        <div
          className={style.left}
          onClick={() => prev()}
          style={{
            pointerEvents: `${sliderIndex === 0 ? "none" : ""}`,
            cursor: `${sliderIndex === 0 ? "not-allowed" : "pointer"}`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <g clip-path="url(#clip0_213_7168)">
              <path
                d="M10 13.2002L4 7.2002L10 1.2002"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_213_7168">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="matrix(-1 0 0 -1 14 14.2002)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div
          className={style.right}
          onClick={() => next()}
          // disabled={sliderIndex === lastIndex ? true : false}
          style={{
            pointerEvents: `${sliderIndex === lastIndex ? "none" : ""}`,
            cursor: `${sliderIndex === lastIndex ? "not-allowed" : "pointer"}`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <g clip-path="url(#clip0_213_7170)">
              <path
                d="M4 1.2002L10 7.2002L4 13.2002"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_213_7170">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0 0.200195)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
