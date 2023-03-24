import logo from '../../../images/1245892.png';
import './header.css';
import NavBar from '../navbar/Navbar';
import MobileNav from '../mobileNav/MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/register">
        <img src={logo} alt="" className="logo" />
        <span>Group Me</span>
      </Link>
      <NavBar></NavBar>
      <MobileNav></MobileNav>
    </header>
  );
};

export default Header;
