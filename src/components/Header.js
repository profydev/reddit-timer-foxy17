/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import redditLogo from '../assets/logo.svg';

const NavBar = styled.nav`
  display: flex;
  padding: 25px 80px 10px 80px;
  justify-content: space-between;
  align-items: center;
  
`;

const HeaderLi = styled.li`
  margin-right: -1px;
`;

const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding-left: 26px;
  color: #636363;
`;

function Header() {
  return (
    <header>
      <NavBar>
        <Link to="/">
          <img src={redditLogo} alt="Logo" />
        </Link>
        <HeaderUl>
          <HeaderLi>
            <NavLink to="/search/javascript">Search</NavLink>
          </HeaderLi>
          <HeaderLi>
            <NavLink to="/#how-it-works">How it works</NavLink>
          </HeaderLi>
          <HeaderLi>
            <NavLink to="/#about">About</NavLink>
          </HeaderLi>
        </HeaderUl>
      </NavBar>
    </header>
  );
}

export default Header;
