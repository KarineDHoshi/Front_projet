import React from 'react';
import Sign_in from "../components/logIn/loginForm";
import Profile from './Profile';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';

const LogIn = () => {
  const [user] = useAtom(userAtom);

  return (
    <>
      {user.isLoggedIn ? (
        <Profile />
      ) : (
        <Sign_in />
      )}
    </>
  );
}

export default LogIn;