import NavLink from '../navlinks/navLinks';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink></NavLink>
      {/* <button className='btn'><a href='#'>Log in</a></button>
           <button className='btn'><a href='#'>Sign up</a></button> */}
    </nav>
  );
};
export default NavBar;
