import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import FlagTH from "../../assets/images/FlagTH.svg";

function HeaderDesktop() {
  return (
    <header className="header header-desktop">
      <div className="container">
        <div className="header__wrap">
          <div className="header__inner">
            <img className="logo" src={logo} alt="logo" />
            <div className="language-selector mr-auto">
              <button className="language-selector__toggle">
                <span className="language-selector__flag">
                  <img
                    alt="en"
                    width="18"
                    height="18"
                    src={FlagTH}
                    className="lazyLoad isLoaded"
                  />
                </span>
                <span className="language-selector__label">th</span>
                <i className="icon-down"></i>
              </button>
              <div className="language-selector__dropdown">
                <a href="/us" className="language-selector__item">
                  <span className="language-selector__flag">
                    <img
                      style={{ display: "none" }}
                      alt="us"
                      width="18"
                      height="18"
                      src="https://cdn.oddspedia.com/images/static/flags/flag-us.svg"
                      className="lazyLoad isLoaded"
                    />
                  </span>
                  <span className="language-selector__label">us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header__content">
            <nav className="header-menu">
              <ul className="header-menu-list">
                <li className="header-menu-list-item nuxt-link-exact-active">
                  {/* eslint-disable-next-line */}
                  <a className="header-menu-link" href="#">
                    Scores
                  </a>
                </li>
                <li className="header-menu-list-item">
                  {/* eslint-disable-next-line */}
                  <a className="header-menu-link" href="#">
                    New
                  </a>
                </li>
                <li className="header-menu-list-item">
                  {/* eslint-disable-next-line */}
                  <a className="header-menu-link" href="#">
                    Odds
                  </a>
                </li>
                <li className="header-menu-list-item">
                  {/* eslint-disable-next-line */}
                  <a className="header-menu-link" href="#">
                    Tips
                  </a>
                </li>
                <li className="header-menu-list-item">
                  {/* eslint-disable-next-line */}
                  <a className="header-menu-link" href="#">
                    Bookmakers
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-utility-nav header-utility-nav--desktop">
              <div className="header-utility-nav__inner">
                <div className="header-utility-nav__action">
                  <a
                    href="/favourites"
                    title="Favourites"
                    className="header-utility-nav__btn header-utility-nav__btn--favorites"
                  >
                    <i className="star outline icon"></i>
                  </a>
                </div>
                <div className="user-dropdown header-utility-nav__action">
                  <button
                    data-e2e="header-profile-btn"
                    className="user-dropdown__btn-icon"
                  >
                    <i className="user icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
