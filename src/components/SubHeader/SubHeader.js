// SubHeader.js
import React from "react";
import "./SubHeader.css";
import { HomeIcon, TimeIcon, SoccerIcon } from '../../assets/images/icons';

function SubHeader() {
  return (
    <div className="sub-header">
      <div className="container">
        <ul
          className="sub-header__items"
          style={{ visibility: "visible", overflow: "visible" }}
        >
          <li className="sub-header__item sub-header__item--show sub-header__item--highlights">
            <a href="/" className="sub-header__link active">
              <span className="sub-header__icon">
                <i className="icon-home">
                  <HomeIcon />
                </i>
              </span>
            </a>
          </li>
          <li className="sub-header__item sub-header__item--show sub-header__item--live">
            <a href="/" className="sub-header__link">
              <span className="sub-header__icon">
                <i className="icon-timer">
                  <TimeIcon />
                </i>
              </span>
              <span className="sub-header__text m-0">Live</span>
            </a>
            <span className="sub-header__notification">212</span>
          </li>
          <li className="sub-header__item">
            <a href="/football" title="Football" className="sub-header__link">
              <span className="sub-header__icon">
                <i className="icon-football">
                  <SoccerIcon />
                </i>
              </span>{" "}
              <span className="sub-header__text">Football</span>
            </a>{" "}
            <span className="sub-header__notification">484</span>
          </li>

          <div className="sub-header-show-more">
            <button>Show more</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SubHeader;
