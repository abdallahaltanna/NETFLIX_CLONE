import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => window.removeEventListener('scroll');
    });
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <Link to='/'>
        <span className='nav__logo'>netflix</span>
      </Link>
    </div>
  );
}

export default Nav;
