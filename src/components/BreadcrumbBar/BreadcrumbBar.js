// BreadcrumbBar.js
import React, { useState, useEffect } from "react";
import "./BreadcrumbBar.css";

function BreadcrumbBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="meta-actions color-grey-2">
          <ul>
            <li>
              <div className="dropdown dropdown--timelist dropdown__list--absolute dropdown__list--full">
                <button type="button" className="dropdown__toggle">
                  <span className="dropdown__toggle-text">Time zone:</span>
                  <span className="dropdown__toggle-current">
                    Asia/Bangkok (UTC +07:00)
                  </span>
                  <span className="dropdown__toggle__icon">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
                        fill="currentColor"
                      ></path>
                      <path d="M0-.75h24v24H0z" fill="none"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </li>
            <li>
              <div className="clock">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa-light"
                  data-icon="clock"
                  className="svg-inline--fa fa-clock fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"
                    fill="currentColor"
                  />
                </svg>
                <i className="icon-clock">
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreadcrumbBar;
