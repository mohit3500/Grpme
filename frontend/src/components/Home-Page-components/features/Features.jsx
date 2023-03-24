import chat from '../../../images/chat.png';
import guidance from '../../../images/guidance.png';
import hangout from '../../../images/planning hangout.jpg';
import share from '../../../images/shareresources.jpg';
import './features.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Feature = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <h2 className="subheading" data-aos="fade-up">
        Imagine A Place Where ...
      </h2>
      <section className="feature feature1  ">
        <div className=" container">
          <img src={chat} alt="" className="feature-img" data-aos="fade-left" />

          <div className="content" data-aos="fade-right">
            <h2>Create an invite-only place where you belong</h2>
            <p>
              GroupMe is organized into various channels where you can
              collaborate, share, and just talk about your day without clogging
              up a group chat.
            </p>
          </div>
        </div>
      </section>
      <section className="feature feature2  ">
        <div className=" container">
          <div className="content" data-aos="fade-left">
            <h2>Easy resource sharing</h2>
            <p>
              You can upload books, notes, and other study resources with your
              group of friends. where you can offer reviews to help others judge
              the quality of the resources{' '}
            </p>
          </div>

          <img
            src={share}
            alt=""
            className="feature-img"
            data-aos="fade-right"
          />
        </div>
      </section>
      <section className="feature feature3  ">
        <div className=" container">
          <img
            src={guidance}
            alt=""
            className="feature-img"
            data-aos="fade-left"
          />

          <div className="content" data-aos="fade-right">
            <h2>Get guidence from other experience</h2>
            <p>
              People can discuss their interview experiences, what they learn,
              what they do Incorrectly, and many other things , in a separate
              section that can be helpful to others.
            </p>
          </div>
        </div>
      </section>

      <section className="feature feature4">
        <div className=" container">
          <div className="content" data-aos="fade-left">
            <h2>where Planing Hangouts is easy</h2>
            <p>
              You can organise your day and find good spots by reading reviews
              of places, learning what other people like and dislike about them,
              and doing a lot more.
            </p>
          </div>

          <img
            src={hangout}
            alt=""
            className="feature-img"
            data-aos="fade-right"
          />
        </div>
      </section>
    </>
  );
};

export default Feature;
