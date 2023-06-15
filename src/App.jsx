import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './atoms/userAtom';
import Register from './pages/register';
import Sign_in from './pages/login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/NavBar/navbar';


import Cookies from 'js-cookie';

function App() {
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
//nouvelle pull request
  return (
    <div>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Register />} />
          <Route path='/users/sign_in' element={<Sign_in />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/' element={}> /> */}
          {/* <Route path='/' element={}> /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )}


export default App;

