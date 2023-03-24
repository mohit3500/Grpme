import { useState } from 'react';
import NavLink from '../navlinks/NavLinks';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import BodyScrollLock from '../BodyScrollLock';
import './mobileNav.css';

const MobileNav = () => {
  const [isLocked, toggle] = BodyScrollLock();

  const [open, Setopen] = useState(false);
  const Hamburger = (
    <AiOutlineMenu
      className="hamburger"
      size="40px"
      onClick={() => {
        Setopen(!open);
        toggle();
      }}
    />
  );

  const close = (
    <CgClose
      className="close"
      size="40px"
      onClick={() => {
        Setopen(!open);
        toggle();
      }}
    />
  );

  return (
    <nav className="mobilenavbar">
      {open ? close : Hamburger}
      {open && <NavLink></NavLink>}
    </nav>
  );
};
export default MobileNav;
