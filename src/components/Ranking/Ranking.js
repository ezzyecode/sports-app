// Ranking.js
import React from "react";
import "./Ranking.css";

function Ranking() {
  return (
    
    <div className="tipsters-ranking-short">
      <div className="navigation-link__text">อันดับทายผล
        </div>
      <div className="tipsters-top-three">
        <ol className="tipsters-top-three__inner">
          <li className="tipsters-top-three__item t-ellipsis">
            <a href="/u/top1" className="">
              <div className="user-avatar-with-rank">
                <div
                  title="TOP"
                  className="user-avatar user-avatar-with-rank__avatar"
                >
                  <div
                    className="avatar"
                    style={{
                      "background-image":
                        "url(https://www.pngarts.com/files/3/Happy-Men-PNG-Transparent-Image.png)",
                    }}
                  >
                    <img
                      src="https://www.pngarts.com/files/3/Happy-Men-PNG-Transparent-Image.png"
                      alt="Abdo Bk"
                      width="80"
                      height="80"
                      title=""
                      className="lazyLoad"
                    />
                  </div>
                </div>
                <div className="user-avatar-with-rank__label">
                  <span>อันดับ 1</span>
                </div>
              </div>
            </a>
            <div className="tipster-info">
              <div className="tipster-info__content">
                <a href="/u/top1" className="tipster-info__name">
                  TOP1
                </a>
                <div className="tipster-info__stats">
                  <div className="tipster-info__profit color-success">
                    +1,111.11
                  </div>
                  <div className="tipster-info__tips-count">(1111)</div>
                </div>
              </div>
            </div>
          </li>
          <li className="tipsters-top-three__item t-ellipsis">
            <a href="/u/domadores-ciub" className="">
              <div className="user-avatar-with-rank">
                <div
                  title="DOMADORES cIub"
                  className="user-avatar user-avatar-with-rank__avatar"
                >
                  <div
                    className="avatar"
                    style={{
                      "background-image":
                        "url(https://www.pngarts.com/files/3/Happy-Men-Download-Transparent-PNG-Image.png)",
                    }}
                  >
                    <img
                      alt="DOMADORES cIub"
                      width="80"
                      height="80"
                      title=""
                      src="https://www.pngarts.com/files/3/Happy-Men-Download-Transparent-PNG-Image.png"
                      className="lazyLoad"
                    />
                  </div>
                </div>
                <div className="user-avatar-with-rank__label">
                  <span>อันดับ 2</span>
                </div>
              </div>
            </a>
            <div className="tipster-info">
              <div className="tipster-info__content">
                <a href="/u/domadores-ciub" className="tipster-info__name">
                  TOP2
                </a>{" "}
                <div className="tipster-info__stats">
                  <div className="tipster-info__profit color-success">
                    +222.22
                  </div>
                  <div className="tipster-info__tips-count">(2222)</div>
                </div>
              </div>
            </div>
          </li>
          <li className="tipsters-top-three__item t-ellipsis">
            <a href="/u/fuxion" className="">
              <div className="user-avatar-with-rank">
                <div
                  title="FUXION"
                  className="user-avatar user-avatar-with-rank__avatar"
                >
                  <div
                    className="avatar"
                    style={{
                      "background-image":
                        "url(https://www.pngarts.com/files/3/Happy-Men-PNG-High-Quality-Image.png)",
                    }}
                  >
                    <img
                      alt="FUXION"
                      width="80"
                      height="80"
                      title=""
                      src="https://www.pngarts.com/files/3/Happy-Men-PNG-High-Quality-Image.png"
                      className="lazyLoad"
                    />
                  </div>
                </div>
                <div className="user-avatar-with-rank__label">
                  <span>อันดับ 3</span>
                </div>
              </div>
            </a>
            <div className="tipster-info">
              <div className="tipster-info__content">
                <a href="/u/top3" className="tipster-info__name">
                  TOP3
                </a>
                <div className="tipster-info__stats">
                  <div className="tipster-info__profit color-success">
                    +33.33
                  </div>
                  <div className="tipster-info__tips-count">(333)</div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Ranking;
