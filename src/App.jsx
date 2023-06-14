import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './userAtom';
import Register from './pages/register';
import Sign_in from './pages/login';


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
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={} /> */}
          <Route path='/users' element={<Register />} />
          <Route path='/users/sign_in' element={<Sign_in />} />
          {/* <Route path='/' element={} /> */}
          {/* <Route path='/' element={}> /> */}
          {/* <Route path='/' element={}> /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )}


export default App;

