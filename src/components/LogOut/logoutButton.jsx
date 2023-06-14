import React from 'react'
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/userAtom';
import Cookies from 'js-cookie';

function Logout() {

  const [, setUser] = useAtom(userAtom);
  // useEffect(() => {
    const HandleLogout = () => {
      setUser({
        id : '',
        isLoggedIn: false,
        token : ''
      });

      Cookies.remove('token');
      Cookies.remove('id');
    }

    // HandleLogout();
  // }, []);

  return (
    <div>
      <button onClick={HandleLogout}>Se déconnecter</button>
    </div>
  )
}

export default Logout