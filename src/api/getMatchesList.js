/* eslint-disable linebreak-style */
import { format } from 'date-fns';

export default function getMatchesList(
  path,
  id,
  startDate,
  finishDate,
  setLoading,
  setErr,
  setData,
  setMatches,
  setName,
) {
  let URL = `http://api.football-data.org/v2/${path}/${id.id}/matches`;

  if ((startDate) || (finishDate)) {
    URL = `http://api.football-data.org/v2/${path}/${id.id}/matches?dateFrom=${format(new Date(startDate), 'yyyy-MM-dd')}&dateTo=${format(new Date(finishDate), 'yyyy-MM-dd')}`;
  }

  setLoading(true);
  setErr(false);
  fetch(
    URL,
    { headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN } },
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.errorCode) {
        setErr(true);
        setData(response);
      } else setMatches(response.matches);
      if (path === 'competitions') {
        setName(response.competition.name);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}
