// News.js
import React from "react";
import "./News.css";

function News() {
  return (
    <div className="aside-news">
      <div className="aside-news__head">
        <span className="aside-news__title">ข่าวล่าสุด</span>
        <a href="/news" className="aside-news__link">
          <span>ดูทั้งหมด</span>
        </a>
      </div>
      <div className="aside-news__body">
        <main className="content-inner">
          <div className="news">
            <div className="news__articles">
              <div className="news__article">
                <img
                  alt="Scotland's Rory Darge blindsided by captain's role for Italy warm-up"
                  width="115"
                  height="115"
                  className="article__thumb lazyLoad isLoaded"
                  src="https://flyimg.oddspedia.com/upload/w_230,h_230,c_1,q_90/https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2Fbf83e474974fbcb1f01093352beb6d6bd5114a77%2F0_121_4211_2527%2Fmaster%2F4211.jpg%3Fwidth%3D1200%26height%3D630%26quality%3D85%26auto%3Dformat%26fit%3Dcrop%26overlay-align%3Dbottom%252Cleft%26overlay-width%3D100p%26overlay-base64%3DL2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc%26s%3Def12ee12a49c213c9f5705db70057dc1"
                />
                <div className="article__content">
                  <p
                    title="Scotland's Rory Darge blindsided by captain's role for Italy warm-up"
                    className="article__heading"
                  >
                    Scotland's Rory Darge blindsided by captain's role for Italy
                    warm-up
                  </p>
                  <p className="article__excerpt">
                    Glasgow flanker with seven caps has been given the armband
                    for World Cup warm-up against the Azzurri Rory Darge was a
                    s...
                  </p>
                  <div className="article__meta">
                    <div className="meta__wrapper">
                      <i className="icon-time"></i>
                      <span>39 minutes ago</span>
                      <span className="meta-separator"></span>
                      <span>The Guardian</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news__article">
                <img
                  alt="Man Utd boss Erik ten Hag considered shock summer move for Arsenal star"
                  width="115"
                  height="115"
                  className="article__thumb lazyLoad isLoaded"
                  src="https://flyimg.oddspedia.com/upload/w_230,h_230,c_1,q_90/https%3A%2F%2Fmetro.co.uk%2Fwp-content%2Fuploads%2F2023%2F07%2FGettyImages-1483907555-1.jpg%3Fquality%3D90%26strip%3Dall%26crop%3D0px%252C50px%252C1024px%252C538px%26resize%3D1200%252C630"
                />
                <div className="article__content">
                  <p
                    title="Man Utd boss Erik ten Hag considered shock summer move for Arsenal star"
                    className="article__heading"
                  >
                    Man Utd boss Erik ten Hag considered shock summer move for
                    Arsenal star
                  </p>{" "}
                  <p className="article__excerpt">
                    Manchester United considered a shock move for an Arsenal
                    talent before focusing their attentions on Atalanta forward
                    Ras...
                  </p>
                  <div className="article__meta">
                    <div className="meta__wrapper">
                      <i className="icon-time"></i>
                      <span>an hour ago</span>
                      <span className="meta-separator"></span>
                      <span>Metro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <a href="/news" className="aside-news__action"><span>
      ไปที่ฟีดข่าว
        </span></a>
    </div>
  );
}

export default News;
