import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/userAtom';
import Cookies from 'js-cookie';
// import { useHistory } from 'react-router-dom';

function Logout() {
  const [, setUser] = useAtom(userAtom);
  // const history = useHistory();
  // useEffect(() => {
    const HandleLogout = () => {
      setUser({
        id : '',
        isLoggedIn: false,
        token : ''
      });

      Cookies.remove('token');
      Cookies.remove('id');
      // history.push('/');
    }

    // HandleLogout();
  // }, []);

  return (
    <div>
      <a href="/home" onClick={HandleLogout}>Se déconnecter</a>
  </div>
  
  )
}

export default Logout;