import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atoms/userAtom';

const Profile = () => {
  const [user] = useAtom(userAtom);
  const [email, setEmail] = useState('');



  return (
    <div>
      <h1>Mon profil</h1>
      <p>
        {user.email}
      </p>
    </div>
  )
}

export default Profile;