import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../../redux/actions';
import MatchListSubNav from '../ContentWrapper/MatchListSubNav/MatchListSubNav';
import MatchListHead from '../ContentWrapper/MatchListHead/MatchListHead';
import MatchListHeadLine from '../ContentWrapper/MatchListHeadLine/MatchListHeadLine';
import MatchListItem from '../ContentWrapper/MatchListItem/MatchListItem';
import './MatchList.css';
const MatchList = ({ matches, fetchMatches }) => {
  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);
  return (
    <>
      <MatchListSubNav />
      <div className='ml__wrap'>
      <MatchListHead />
      {matches.length > 0 && (
        <MatchListHeadLine
          leagueImage={matches[0]?.competition?.country?.logo || 'https://cdn.oddspedia.com/images/categories/europe.svg'}
          leagueCategory={matches[0]?.competition?.category?.name_th || matches[0]?.competition?.category?.name}
          leagueInfo={matches[0]?.competition?.name_th || matches[0]?.competition?.name}
        />
      )}
      {matches.map(match => {
        return (
          <MatchListItem
            key={match.id}
            matchTime={new Date(match.match_time).toLocaleTimeString()} // adjust as needed
            homeTeam={match.home_team.name}
            awayTeam={match.away_team.name}
            matchScore={`${match.home_scores[0]} - ${match.away_scores[0]}`} // adjust as needed
            isFavorite={"Favorite"} // replace this with real data
          />
        );
      })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  matches: Array.isArray(state.matches) ? state.matches : [],
});
const mapDispatchToProps = {
  fetchMatches,
};
MatchList.defaultProps = {
  matches: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(MatchList);