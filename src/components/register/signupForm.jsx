import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/userAtom';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

function signupForm () {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_Confirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
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

        setSuccess('Compte créé avec succès!'); // Set success flash message
      } else {
        setError('Erreur lors de la création du compte');
      }
    } catch (error) {
      setError('Erreur lors de la création du compte(connection)');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un compte</h2>
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
      <br></br>
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
      <br></br>
      <div>
        <label htmlFor="password-confirmation">Confirme ton mot de passe :</label>
        <input
          type="password"
          id="password-confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_Confirmation(e.target.value)}
          required
        />
      </div>
      <br></br>
      <button type="submit">Créer un compte</button>
      <br></br>
      <p className="signInLink"> Tu as déjà un compte ? <Link to="/users/sign_in">Connecte-toi !</Link></p>
    </form>
  );
}

export default signupForm;
