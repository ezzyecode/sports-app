export const actionTypes = {
  SET_MATCHES: 'SET_MATCHES',
};

export const setMatches = (matches) => ({
  type: actionTypes.SET_MATCHES,
  payload: matches,
});

export const fetchMatches = () => {
  return async (dispatch) => {
    const response = await fetch('http://165.22.104.72:3333/api/match/date/2023-07-26?page=1&pageSize=20');
    const data = await response.json();
    console.log(data);
    // แปลงข้อมูลจาก object ให้เป็น array และเรียกใช้ flatMap ผ่านข้อมูลแต่ละเซต
    const allMatches = Object.values(data).flatMap(league => league.matches);

    dispatch(setMatches(allMatches));
  };
};