import { Link } from 'react-router-dom';
import './navLinks.css';

const NavLink = () => {
  return (
    <ul className="navlist">
      <li>
        <Link to="/register">Home</Link>
      </li>
      <li>
        <Link to="/register">Features</Link>{' '}
      </li>
      <li>
        <Link to="/register">Contact us</Link>{' '}
      </li>
      <li>
        <button className="btn">
          <Link to="/login" id="login">
            Log in
          </Link>
        </button>
      </li>
      <li>
        <button className="btn">
          <Link to="/register" id="signup">
            Sign up
          </Link>
        </button>
      </li>
    </ul>
  );
};
export default NavLink;
