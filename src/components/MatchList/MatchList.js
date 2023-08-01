import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMatches } from "../../redux/actions";
import MatchListSubNav from "../ContentWrapper/MatchListSubNav/MatchListSubNav";
import MatchListHead from "../ContentWrapper/MatchListHead/MatchListHead";
import MatchListHeadLine from "../ContentWrapper/MatchListHeadLine/MatchListHeadLine";
import MatchListItem from "../ContentWrapper/MatchListItem/MatchListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./MatchList.css";

const MatchList = ({ matches, fetchMatches }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Reset current page to 1 and hasMore to true when selected date changes
    setCurrentPage(1);
    setHasMore(true);
  }, [selectedDate]);

  useEffect(() => {
    fetchMatches(selectedDate, currentPage, setHasMore).then((data) => {
      if (data && Object.keys(data).length === 0) {
        // check if data is defined before using it
        setHasMore(false);
      }
    });
  }, [fetchMatches, currentPage, selectedDate, setHasMore]);

  // Group matches by league
  const matchesGroupedByLeague = matches.reduce((groupedMatches, match) => {
    const leagueId = match.competition.id;
    if (!groupedMatches[leagueId]) {
      groupedMatches[leagueId] = [];
    }
    groupedMatches[leagueId].push(match);
    return groupedMatches;
  }, {});

  return (
    <>
      <MatchListHead />
      <MatchListSubNav setSelectedDate={setSelectedDate} />
      <InfiniteScroll
        dataLength={matches.length}
        next={() => setCurrentPage((prevPage) => prevPage + 1)}
        hasMore={hasMore} // use the state here
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="ml__wrap"
      >
        {Object.keys(matchesGroupedByLeague).map((leagueId) => {
          const matchesInLeague = matchesGroupedByLeague[leagueId];
          return (
            <div key={leagueId}>
              {matchesInLeague.length > 0 && (
                <MatchListHeadLine
                  leagueImage={
                    matchesInLeague[0]?.competition?.country?.logo ||
                    "https://cdn.oddspedia.com/images/categories/europe.svg"
                  }
                  leagueCategory={
                    matchesInLeague[0]?.competition?.category?.name_th ||
                    matchesInLeague[0]?.competition?.category?.name
                  }
                  leagueInfo={
                    matchesInLeague[0]?.competition?.name_th ||
                    matchesInLeague[0]?.competition?.name
                  }
                />
              )}
              {matchesInLeague.map((match) => (
                <MatchListItem
                  key={match.id}
                  matchTime={new Date(match.match_time).toLocaleTimeString()} // adjust as needed
                  homeTeam={[match.home_team]}
                  awayTeam={[match.away_team]}
                  homeScores={[match.home_scores]}
                  awayScores={[match.away_scores]}
                  coverage={[match.coverage]}
                />
              ))}
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

const mapStateToProps = (state) => ({
  matches: Array.isArray(state.matches.matches) ? state.matches.matches : [],
});
const mapDispatchToProps = {
  fetchMatches,
};
MatchList.defaultProps = {
  matches: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(MatchList);
