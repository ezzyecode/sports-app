// MatchPoll.js
import React from "react";
import "./MatchPoll.css";

function MatchPoll() {
  return (
    <div className="VueCarousel">
      <div className="VueCarousel-wrapper">
        <div
          className="VueCarousel-inner"
          style={{
            transform: "translate(0px, 0px)",
            transition: "transform 0.5s ease 0s",
            flexBasis: "409px",
            visibility: "visible",
            height: "auto",
          }}
        >
          <div
            aria-hidden="true"
            role="tabpanel"
            className="VueCarousel-slide"
          >
            <div className="match-poll-overview-item t-center">
              <div className="match-poll-overview-item__header t-uppercase montseratBold">ใครจะชนะ?
              </div>{" "}
              <div className="match-poll-overview-item__body">
                <div className="who-will-win-match t-center">
                  <div className="who-will-win-match__breadcrumbs">
                    <a href="/football" className>
                      Football
                    </a>
                    /
                    <a href="/football/brazil/serie-a" className>
                      Serie A
                    </a>
                  </div>{" "}
                  <a
                    href="/football/botafogo-rj-santos-3152?m=7290216"
                    className="who-will-win-match__match d-flex align-center"
                  >
                    <div className="who-will-win-match__match__team">
                      <div>
                        <img
                          alt="Santos"
                          width={65}
                          height={65}
                          className="who-will-win-match__match__logo lazyLoad isLoaded"
                          src="https://cdn.oddspedia.com/images/teams/big/1/89.png"
                        />{" "}
                        <span className="who-will-win-match__match__name">
                          Santos
                        </span>
                      </div>
                    </div>{" "}
                    <small className="who-will-win-match__match__date color-grey-2">
                      <span>
                        <div
                          data-v-7c035809=""
                          className="who-will-win-match__match__date__counter color-secondary"
                        >
                          <span data-v-7c035809="">04:09:54</span>
                        </div>
                      </span>
                      24 Jul, 02:00
                    </small>{" "}
                    <div className="who-will-win-match__match__team">
                      <div
                        team-slug="botafogo-rj"
                        team-id={75}
                        sport-id={1}
                        title="Botafogo RJ"
                      >
                        <img
                          alt="Botafogo RJ"
                          width={65}
                          height={65}
                          className="who-will-win-match__match__logo lazyLoad isLoaded"
                          src="https://cdn.oddspedia.com/images/teams/big/1/75.png"
                        />{" "}
                        <span className="who-will-win-match__match__name">
                          Botafogo RJ
                        </span>
                      </div>
                    </div>
                  </a>
                </div>{" "}
                <div className="match-poll-overview-item__poll">
                  <button className="match-poll-overview-item__poll__action">
                    <span className="match-poll-overview-item__poll__action__icon bg-grey-5">
                      <img
                        alt="Santos"
                        width={28}
                        height={28}
                        className="lazyLoad isLoaded"
                        src="https://cdn.oddspedia.com/images/teams/big/1/89.png"
                      />
                    </span>
                    3.13
                  </button>{" "}
                  <button className="match-poll-overview-item__poll__action">
                    <span className="match-poll-overview-item__poll__action__icon">
                      <i className="x icon" />
                    </span>
                    3.13
                  </button>{" "}
                  <button className="match-poll-overview-item__poll__action">
                    <span className="match-poll-overview-item__poll__action__icon bg-grey-5">
                      <img
                        alt="Botafogo RJ"
                        width={28}
                        height={28}
                        className="lazyLoad isLoaded"
                        src="https://cdn.oddspedia.com/images/teams/big/1/75.png"
                      />
                    </span>
                    2.41
                  </button>
                </div>{" "}
                {/**/}{" "}
                <div
                  className="match-poll-overview-item__hook d-flex align-center justify-space-between"
                >
                  <span
                    className="montseratBold"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    Presented by
                  </span>{" "}
                  <img
                  style={{ display: "none" }}
                    alt="1xBet"
                    width={60}
                    height={24}
                    src="https://cdn.oddspedia.com/images/bookmakers/dark-back/120x48/1xbet.png"
                    className="lazyLoad isLoaded"
                  />{" "}
                  <div className="match-poll-overview-item__hook__icon">
                    <span className="u-circle flex-center">
                      <i className="gift icon gift-icon" />
                    </span>{" "}
                    <svg
                      width={49}
                      height={24}
                      viewBox="0 0 49 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0H49V24H0L4 13H0L5 0Z" fill="#3ab26d" />
                    </svg>
                  </div>
                </div>{" "}
                {/**/}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default MatchPoll;
