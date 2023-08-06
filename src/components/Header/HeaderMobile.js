import React from "react";
import "./Header.css";
import FlagTH from "../../assets/images/FlagTH.svg";
import { LogoKub } from "../../assets/images/icons";

function HeaderMobile() {
  return (
    <div className="wrapper is-mobile-or-tablet has-bottom-bar is-mobile page-home page-index___en">
      <header className="header-mobile">
        <div className="container">
          <div className="header__wrap">
            <div className="header__inner">
              <div className="nav-mobile__wrap">
                <button className="nav-mobile__toggle">
                  <span></span>
                </button>
                <nav className="nav-mobile">
                  <div className="nav-mobile__inner">
                    <div className="nav-mobile__main"></div>
                    <div className="nav-mobile__dropdowns"></div>
                  </div>
                </nav>
                {/* Your mobile-specific elements go here */}
              </div>
              <a href="/" className="logo">
                <LogoKub />
              </a>
              <div className="header-utility-nav header-utility-nav--mobile">
                <div className="header-utility-nav__inner">
                  <div className="search header-utility-nav__action">
                    <button className="search__toggle">
                      <i className="search icon search__icon"></i>
                    </button>
                  </div>
                  <div className="header-utility-nav__action">
                    <a
                      href="/favourites"
                      title="Favourites"
                      className="header-utility-nav__btn header-utility-nav__btn--favorites"
                    >
                      <i className="star outline icon mobile__icon"></i>
                    </a>
                  </div>
                  <div className="user-dropdown header-utility-nav__action">
                    <button
                      data-e2e="header-profile-btn"
                      className="user-dropdown__btn-icon"
                    >
                      <i className="user icon mobile__icon"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMobile;
