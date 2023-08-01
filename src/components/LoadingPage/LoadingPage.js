import React from 'react';
import './LoadingPage.css';  // คุณต้องสร้างไฟล์ CSS นี้ด้วย
import logo from "../../assets/images/logo.png";

const LoadingPage = () => (
  <div className="loader">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.6 117.1" width="100">
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path fill="#1a3251" d="M199.6 0l-31 36.8L178.4 0z"></path> 
        <path d="M134.8 101.2c1.8-3.2 3.3-7.1 4.6-11.5l14.3-50.1c3.3-11.2 2.8-18.8-1.3-23C148.8 12.9 141 11 129 11H92.6c-8 0-14.4.7-19.2 2.2-7.5 2.4-13.1 6.9-16.8 13.5-1.9 3.4-3.6 7.7-5 12.8l-14.3 50h21.5L0 117.1H98.8c8 0 14.4-.7 19.2-2.2 7.5-2.5 13.1-7.1 16.8-13.7zm-28.2-11.5H70.1l14.2-49.9h48.9l-14.8 8.5-11.8 41.4z" fill="#45abe0"></path>
      </g>
    </svg> */}
    <img className="logo" src={logo} alt="logo" />
  </div>
);

export default LoadingPage;
