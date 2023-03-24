import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>start your Group Journey </h2>
      <p>it's simple and totally free</p>
      <button className="btn btn-footer">
        <Link to="/register">Sign up for free</Link>
      </button>
    </footer>
  );
};
export default Footer;
