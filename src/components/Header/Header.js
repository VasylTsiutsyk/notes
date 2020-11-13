import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo"></div>
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/"  exact >Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}