import React, { useContext } from 'react';
import logo from "./assets/ReactLogo.png";
import "./Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import { AuthContext } from './context/auth';

const MainHeader = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    window.location.href = '/';
  };

  return (
    <div className='HeaderDiv'>
      <div className='Container'>
        <header className='Header'>
          <div className="logo"> 
            <NavLink to='/'>
              <img src={logo} alt="Logo"/>
            </NavLink>
          </div>

          <div className="pages">
            <ul>
              {!auth ? <li><NavLink to='/'>Login</NavLink></li> :
              <>
                <li><button className='LogOutButton' onClick={logout}>Logout</button></li>
                <li><NavLink to='/home'>Home</NavLink></li>
              </>}
            </ul>
          </div>

          <div className="Socialss">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default MainHeader;
