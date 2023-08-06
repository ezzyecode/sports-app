import React from "react";
import "./MatchListItem.css";

function MatchListItem({
  matchTime,
  homeTeam,
  awayTeam,
  homeScores,
  awayScores,
  coverage,
}) {
  const [homeTeamData] = homeTeam;
  const [awayTeamData] = awayTeam;
  const [homeScoresData] = homeScores;
  const [awayScoresData] = awayScores;
  const [coverageData] = coverage;
  const [hour, minute] = matchTime.split(":");
  const timeString = `${hour}:${minute}`;
  return (
    <div className="match-list-item">
      <div className="match">
        <a
          href="/football"
          title={`${homeTeamData.name} - ${awayTeamData.name}`}
          className="match-url match-url--flex"
        >
          <div className="match-state">
            <div className="match-state-inner">
              <div className="match-status match-status--inplay">
                {timeString}
              </div>
            </div>
            <div className="match-state-outer"></div>
          </div>
          <div className="match-teams">
            <div className="match-teams">
              <img
                alt={homeTeamData.name}
                width="20"
                height="20"
                className="logo-team match-team__logo u-circle image-size-sm lazyLoad isLoaded"
                src={homeTeamData.logo}
              />
              <div className="match-team__name">{homeTeamData.name}</div>
              <div className="match-team__widgets"></div>
            </div>
            <div className="match-teams">
              <img
                alt={awayTeamData.name}
                width="20"
                height="20"
                className="logo-team match-team__logo u-circle image-size-sm lazyLoad isLoaded"
                src={awayTeamData.logo}
              />
              <div className="match-team__name">{awayTeamData.name}</div>
              <div className="match-team__widgets"></div>
            </div>
          </div>
          <div className="match-live-or-lineup">
            <spand className="icon-setting">
              {coverageData.mlive === 1 && (
                <i className="play circle icon match-live"></i>
              )}
              {coverageData.mlive !== 1 && coverageData.lineup === 1 && (
                <i className="chart line icon match-lineup"></i>
              )}
              {coverageData.mlive !== 1 && coverageData.lineup !== 1 && ""}
            </spand>
          </div>
          <div
            className="match-sets match-sets--inplay"
            style={{ display: "none" }}
          >
            <div className="match-set match-set--current">
              <div className="match-set__team match-set__team--home">
                <div className="match-score-result">
                  <span className="match-score-result__score">
                    {homeScoresData[0]}
                  </span>
                </div>
              </div>
              <div className="match-set__team match-set__team--away">
                <div className="match-score-result">
                  <span className="match-score-result__score">
                    {awayScoresData[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="match-game-score match-game-score--inplay">
            <div className="match-set match-set--current">
              <div className="match-set__team match-set__team--home">
                <div className="match-score-result">
                  <span className="match-score-result__score">
                    {homeScoresData[0]}
                  </span>
                </div>
              </div>
              <div className="match-set__team match-set__team--away">
                <div className="match-score-result">
                  <span className="match-score-result__score">
                    {awayScoresData[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="match-favourite-btn-wrapper">
          <button className="match-favourite-btn">
            <i className="match-favourite-btn__icon star outline icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchListItem;
