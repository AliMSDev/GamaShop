import React, { useEffect, useState } from 'react';

import NavIcon from './navIcon/navIcon';
import NavItem from './navItem/navItem';
import NavLink from './navLink/navlink';
import NavToggle from './navToggle/navToggle';
import { useSelector } from 'react-redux';
import NavSearch from './navSearch/navSearch';

// nav component
const Nav = () => {
  // redux menutoggle state
  const menutoggle = useSelector(state => state.menuToggleReduce);

  // search state
  const [search, setSearch] = useState(true);

  useEffect(() => {
    // nav scroll behaviour
    window.onscroll = function () { scrollfunction() };
    function scrollfunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('navbar').classList.add('navbarScroll')
      }
      else {
        if (document.getElementById('navbar') != undefined) {
          document.getElementById('navbar').classList.remove('navbarScroll')
        }
      }
    }
  }, []);

  // hide searchbox
  const clickHandler = () => {
    document.querySelector('.navSearch').classList.add('navSearch-hide');
    setSearch(!search);
  }

  // show searchbox
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(!search);

    if (search) {
      document.querySelector('.navSearch').classList.remove('navSearch-hide');
    }
  }

  return (
    <>
      <nav className={menutoggle ? 'navigation container navigationShow' : 'navigation container'} id='navbar'>
        <ul className='container'>
          <NavIcon />
          <NavToggle class={menutoggle ? 'navToggle navToggleShow' : 'navToggle'} />
          <NavItem />
          <NavLink clickHandler={searchHandler} />
        </ul>
      </nav>
      <NavSearch click={clickHandler} />
    </>
  )
}

export default Nav;