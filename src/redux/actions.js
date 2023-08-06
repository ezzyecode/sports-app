import { formatDate } from "./dateUtils";
export const actionTypes = {
  SET_MATCHES: "SET_MATCHES",
  SELECT_DATE: "SELECT_DATE",
};

export const setMatches = (matches, date) => ({
  type: actionTypes.SET_MATCHES,
  payload: matches,
  date: date,
});

export const clearMatches = () => {
  return {
    type: 'CLEAR_MATCHES'
  };
};

export const fetchMatches = (date, page = 1, setHasMore) => {
  return async (dispatch, getState) => {
    dispatch(clearMatches()); // clear current data first
    const formattedDate = formatDate(date);
    const response = await fetch(`https://apiv2.game4.co/api/match/date/${formattedDate}?page=${page}&pageSize=20`);
    const data = await response.json();

    if (data) {
      const newMatches = Object.values(data).flatMap(league => league.matches);

      if (newMatches.length === 0 && setHasMore) {
        setHasMore(false);
        console.log("doneeeee");
      }

      dispatch(setMatches(newMatches, date));
    } else {
      console.error("No data received from API");
    }

    dispatch(selectDate(date));
  };
};

export const selectDate = (date) => {
  return {
    type: actionTypes.SELECT_DATE,
    payload: date,
  };
};