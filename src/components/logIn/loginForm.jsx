import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/userAtom';
import Cookies from 'js-cookie';

function Sign_in() {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Cookies.set('token', response.headers.get("Authorization"));
        Cookies.set('id', data.user.id);

        setUser({
          isLoggedIn: true,
        });

        setSuccess('Login avec succès!'); // Set success flash message
      } else {
        setError('Erreur lors du login!');
      }
    } catch (error) {
      setError('Erreur lors de la tentative de connection!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Se connecter</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Se connecter !</button>
      <p className="signInLink"> Tu n'as pas de compte ? <Link to="/users">Inscris toi</Link></p>

    </form>
  );
}

export default Sign_in;
