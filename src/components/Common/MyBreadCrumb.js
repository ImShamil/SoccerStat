/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

function MyBreadCrumb({
  path,
  name,
}) {
  // const URL = `http://api.football-data.org/v2/${path}/${id}`;
  // const [name, setName] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     URL,
  //     { headers: { 'X-Auth-Token': process.env.REACT_APP_USER_TOKEN } },
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if ('name' in response) {
  //         setName(response);
  //       } else setErr(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [path || id]);
  // console.log(name);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">
        <Link to={`/${path}`}>
          {path === 'teams' ? 'Команды' : 'Лиги'}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {name.replace('?', '').replaceAll('%20', ' ')}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
export default MyBreadCrumb;
