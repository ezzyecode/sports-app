// AsideContent.js
import React from "react";
import MatchPoll from "../MatchPoll/MatchPoll";
import Ranking from "../Ranking/Ranking";
import News from "../News/News";
import FollowUs from "../FollowUs/FollowUs";
import "./AsideContent.css";

function AsideContent() {
  return (
    <aside className="aside">
      <div style={{ display: "contents" }}>
        <div className="aside__content aside__default">
          <div>
            <div className="match-poll-overview">
              <MatchPoll />
            </div>
            <div className="aside-ranking">
              <Ranking />
            </div>
            <div className="aside-news">
              <News />
            </div>
            <div className="aside-follow-us">
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideContent;
