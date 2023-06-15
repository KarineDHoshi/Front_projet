import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';
import { useAtom } from "jotai";
import { userAtom } from "../../atoms/userAtom";
import Logout from "../LogOut/logoutButton";

const Navbar = () => {
  // const [user] = useAtom(userAtom);
  // const [, setUser] = useAtom(userAtom);

  // useEffect(() => {
  //   const token = Cookies.get('token');
  //   const id = Cookies.get('id');

  //   if (token) {
  //     setUser({
  //       id: id,
  //       isLoggedIn: true,
  //       token: token,
  //     });
  //   }
  // }, []);


  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <Link to="/">Accueil</Link>
  //       </li>
  //       {user.isLoggedIn ? (
  //         <>
  //           <li>
  //             <Link to="/profile">Profil</Link>
  //           </li>
  //         </>
  //       ) : (
  //         <>
  //           <li>
  //             <Link to="/users">Inscription</Link>
  //           </li>
  //           <li>
  //             <Link to="/users/sign_in">Se Connecter</Link>
  //           </li>
  //         </>
  //       )}
  //     </ul>
  //     {user.isLoggedIn ? (
  //       <>
  //         <div>
  //           <p> Bienvenue !</p>
  //         </div>
  //         <div>
  //           <Logout />
  //         </div>
  //       </>
  //     ) : null}
  //   </nav>
  // );
};

export default Navbar;
