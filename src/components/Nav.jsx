import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-around items-center container py-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="136.785"
        height="28.109"
        viewBox="0 0 136.785 28.109"
      >
        <g
          id="Group_10"
          data-name="Group 10"
          transform="translate(-365.135 -50.108)"
        >
          <path
            id="Path_7"
            data-name="Path 7"
            d="M391.791,57.4,387.131,71.2l-5.917-13.588h-1.349L374.028,71.1l-4.579-13.7h-4.314l6.806,20.335h3.391l5.213-12.388,5.237,12.388h3.391l6.8-20.335Z"
            fill="#fff"
          ></path>
          <path
            id="Path_8"
            data-name="Path 8"
            d="M416.569,60.236c-.94,1.58-2.19,3.68-2.3,3.87a3.119,3.119,0,0,0-.26.48.413.413,0,0,0-.07.11q-2.73,4.665-5.47,9.31a1.33,1.33,0,0,1-1.14.75,1.265,1.265,0,0,1-1.12-.45c-.77-.93-1.53-1.88-2.31-2.83-.75-.92-1.51-1.84-2.26-2.76a1.245,1.245,0,0,1-.25-.98,1.188,1.188,0,0,1,.88-1.1,1.363,1.363,0,0,1,1.43.39c.05.06.1.12.16.18,1.05,1.01,2.08,2.04,3.12,3.05.08.07.11.07.16-.01,1.3-2.04,2.59-4.08,3.89-6.12.35-.55.69-1.1,1.04-1.64.11-.15,1.45-2.4,2.38-3.97a11.261,11.261,0,0,0-5.93-1.61,10.5,10.5,0,1,0,8.05,3.33Z"
            fill="#fff"
          ></path>
          <path
            id="Path_9"
            data-name="Path 9"
            d="M448.966,67.155l6.886-9.758h-4.96l-5.49,7.867h-2.561V50.108h-4.175V77.732h4.175V69.058h2.538l6.09,8.674h5.11Z"
            fill="#fff"
          ></path>
          <path
            id="Path_10"
            data-name="Path 10"
            d="M470.374,56.936a8.711,8.711,0,0,0-6.6,2.768v-9.6h-4.187V77.732h4.187V66.844c0-3.6,2.3-6.159,5.456-6.159,3.091,0,4.66,1.972,4.66,5.651v11.4h4.187V65.471C478.079,60.235,475.114,56.936,470.374,56.936Z"
            fill="#fff"
          ></path>
          <path
            id="Path_11"
            data-name="Path 11"
            d="M497.744,57.4V68.562c0,3.484-1.891,5.675-5.063,5.675-3.137,0-5.064-2.145-5.064-5.675V57.4h-4.175V69.139c0,5.479,3.656,9.078,9.239,9.078,5.617,0,9.239-3.6,9.239-9.078V57.4Z"
            fill="#fff"
          ></path>
          <path
            id="Path_12"
            data-name="Path 12"
            d="M423.833,65.992v11.74H428V66.572c0-3.49,1.89-5.68,5.06-5.68v-3.98C427.453,56.912,423.833,60.512,423.833,65.992Z"
            fill="#fff"
          ></path>
        </g>
      </svg>

      <ul className="flex flex-row justify-center items-center text-white gap-10">
        <li>
          <a href="#" className="decoration-dashed decoration-slate-500">
            Home
          </a>
        </li>
        <li>
          <a href="#">Management</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <button className="border rounded-lg text-white px-4 py-2">
        Sign up
      </button>
    </nav>
  );
};

export default Nav;
