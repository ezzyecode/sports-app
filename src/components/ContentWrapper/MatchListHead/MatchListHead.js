// components/ContentWrapper/MatchListHead/MatchListHead.js
import React from "react";
import "./MatchListHead.css";
import { IconsFootball } from '../../../assets/images/icons';

function MatchListHead() {
  return (
    <div className="content-header-label d-flex align-center bg-secondary">
      <a href="/football" className="content-header-label__title t-uppercase t-ellipsis">
        <IconsFootball className="sport-icon-container"/>Football
      </a>
      <span className="popover popover--center">
        <span className="popover__trigger">
          <div className="media-package-badge d-flex align-center t-center">
            <small className="media-package-badge__label d-none d-sm-block">
              Presented by
            </small>
            <span
              className="media-package-badge__btn cursor-pointer d-flex align-center"
            >
              <img style={{ display: "none" }}
                alt="1xBet"
                width="58"
                height="20"
                src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png"
              />
              <span
                className="media-package-badge__btn__icon u-circle flex-center"
                style={{
                  "background-color":
                    "rgb(22, 160, 255); color: rgb(1, 47, 94)",
                }}
              >
                <i className="gift icon gift-icon"></i>
              </span>
            </span>
          </div>
        </span>
        <div className="popover__body" style={{ display: "none" }}>
          <button className="popover__close">
            <i className="icon-close"></i>
          </button>
          <div className="top-ten-info t-center">
            <div
              className="top-ten-info__header"
              style={{ "background-color": "rgb(1, 47, 94)" }}
            >
              <button className="top-ten-info__header__close d-md-none">
                <i className="icon-close"></i>
              </button>{" "}
              <img
              style={{ display: "none" }}
                alt="1xBet"
                width="60"
                height="24"
                className="m-auto"
                src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png"
              />
            </div>
            <div className="media-package-info">
              <p className="media-package-info__heading">
                โบนัส 100% จากการฝากครั้งแรก ถึง 5200 THB
              </p>
              <div className="media-package-info__box">
                <div className="media-package-info__text montseratBold">
                  With code: Oddspedia
                </div>
                <span
                  className="go-link cursor-pointer btn btn--primary p-0 cursor-pointer"
                  style={{
                    color:
                      "rgb(255, 255, 255); background-color: rgb(22, 160, 255); border-color: rgb(22, 160, 255)",
                  }}
                >
                  Register
                </span>
              </div>
              <div className="media-package-info__tnc color-grey-2">
                มากถึง 5200 บาทด้วยรหัสโปรโมชั่น "Oddspedia" (4000
                บาทโดยไม่ต้องใช้รหัสโปรโมชั่น)
                ข้อกำหนดและเงื่อนไขเหล่านี้เป็นส่วนหนึ่งของข้อกำหนดและเงื่อนไขทั่วไปของ
                1xBet
              </div>
            </div>
          </div>
        </div>
      </span>
      <a
        href="/football"
        className="match-list-head__action match-list-head__action--link"
      >
        See all
        <i className="angle double right icon"></i>
      </a>
    </div>
  );
}

export default MatchListHead;
