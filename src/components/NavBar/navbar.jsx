import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../atoms/userAtom";
import Logout from "../LogOut/logoutButton";

const Navbar = () => {
  const [user] = useAtom(userAtom);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {user.isLoggedIn ? (
          <>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/users">Inscription</Link>
            </li>
            <li>
              <Link to="/users/sign_in">Se Connecter</Link>
            </li>
          </>
        )}
      </ul>
      {user.isLoggedIn ? (
        <>
          <div>
            <p> Bienvenue !</p>
          </div>
          <div>
            <Logout />
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
