/* eslint-disable linebreak-style */
export default function getPageList(
  path,
  setLoading,
  setErr,
  setData,
) {
  const URL = `http://api.football-data.org/v2/${path}`;
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
      } else {
        if ('competitions' in response) {
          setData(response.competitions);
        }
        if ('teams' in response) {
          setData(response.teams);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
}
