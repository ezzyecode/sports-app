import React from "react";
import "./MatchListHeadLine.css";

function MatchListHeadLine({ leagueImage, leagueCategory, leagueInfo }) {
  return (
    <div className="match-list-headline d-flex p-0">
      <figure className="match-list-headline__icon">
        <img
          alt={leagueCategory}
          className="image-size-xs lazyLoad isLoaded"
          src={leagueImage}
        />
      </figure>
      <ul className="match-list-headline-title m-0">
        <li>
          <a href="/football" title={leagueCategory}>{leagueCategory}</a>
        </li>
        <li>
        <a href="/football" title={leagueInfo}>{leagueInfo}</a>
        </li>
      </ul>
      <div className="match-list-headline__actions">
        <button className="match-list-headline__action color-grey-2">
        <i className="list ul icon"></i>
        </button>
      </div>
    </div>
  );
}

export default MatchListHeadLine;
