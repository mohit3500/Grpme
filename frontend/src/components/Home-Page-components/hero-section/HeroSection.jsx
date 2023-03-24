import './heroSection.css';
import hero from '../../../images/Hero-section.png';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <section className="herosection-container">
      <div className="herosection">
        <div className="hero-content" data-aos="fade-right" data-aos-delay="50">
          <h1 className="heading">A better Way to Hang With your</h1>
          <div className="dynamicText">
            {' '}
            <Typewriter
              options={{
                strings: [
                  'campus Neighbours',
                  'Study groups',
                  'Geek community',
                  'creative Circle',
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typeWriterText',
                cursorClassName: 'cursor',
              }}
            />
          </div>
          <button className="btn btn-hero">
            <Link to="/register"> Sign up now </Link>
          </button>
        </div>
        <img src={hero} alt="" data-aos="fade-up" />
      </div>
    </section>
  );
};
export default HeroSection;
