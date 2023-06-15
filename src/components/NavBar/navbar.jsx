import React from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../../atoms/userAtom';
import Logout from '../LogOut/logoutButton';
import './navbar.css';

const Navbar = () => {
  const [user] = useAtom(userAtom);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">Accueil</Link>
          </li>
          {user.isLoggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/profile">Profil</Link>
              </li>
              <li className="navbar-item">
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/users">Inscription</Link>
              </li>
              <li className="navbar-item">
                <Link to="/users/sign_in">Se connecter</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
