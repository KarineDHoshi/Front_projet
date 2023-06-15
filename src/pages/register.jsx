import React from 'react';
import SignupForm from "../components/register/signupForm";
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';

const Register = () => {
  const [user] = useAtom(userAtom);


  return (
    <>
      {user.isLoggedIn ? (
        <Profile />
        ) : (
        <SignupForm />
        )}
    </>
  );
};

export default Register;