import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './userAtom';
import Register from './pages/register';
import Sign_in from './pages/login';
import Logout from './components/logout';


import Cookies from 'js-cookie';

function App() {
  //const [user] = useAtom(userAtom);
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const token = Cookies.get('token');
    const id = Cookies.get('id');

    if (token) {
      setUser({
        id: id,
        isLoggedIn: true,
        token: token,
      });
    }
  }, []);

  return (

        <div>
        <Register />
        <Sign_in />
        <Logout />
      </div>

      )}


export default App;

