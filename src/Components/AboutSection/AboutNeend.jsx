import neend from '../../images/Neend.png';
import fb from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import insta from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import Google from '../../images/google.png';
import spotify from '../../images/spotify.svg';
import Gana from '../../images/gaana.svg';
import saavn from '../../images/saavn.svg';
import '../AboutSection/AboutNeend.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="aboutSection" className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={neend} style={{ marginLeft: '4%' }} alt="..." />
            <h1 id="neend">NEEND</h1>
            <p id="textfiler">
              {t(
                'The Neend app is India’s only free sleep app in our regional language for relaxing sleep stories, soothing sleep sounds, and ambiances that will improve your sleep or make your sleep more effective. Objective of these sleep stories is to shut the outside world, reset your mind, and create the perfect mood for sleep. These will make you feel so relaxed while listening, that you fall asleep quickly, and have a better quality sleep. All these sleep stories on our app are a combination of activity-based relaxation, soothing narration, calming music, white noise, ASMR, hypnosis, and Yog Nidra in a very unique way. These are crafted after a lot of careful work and are verified by experts.'
              )}
            </p>
            <div id="inline">
              <p id="follow-up">Follow us on:</p>
              <a id="social" href=" https://www.facebook.com/achchi.neend">
                <img id="social" src={fb} alt="..." />
              </a>
              <a id="social" href="https://in.linkedin.com/company/neend">
                <img id="social" src={linkedin} alt="..." />
              </a>
              <a id="social" href=" https://www.instagram.com/achchi.neend/">
                <img id="social" src={insta} alt="..." />
              </a>
              <a id="social" href=" https://twitter.com/achchineend">
                <img id="social" src={twitter} alt="..." />
              </a>
            </div>
          </div>
          {/* <div className="col-lg-1">
                        <p id="dots">....................</p>
                    </div> */}
          <div id="col" className="col-lg-5">
            <p id="downloadText">Download App on:</p>
            <div id="inline">
              <a
                href="https://play.google.com/store/apps/details?id=com.neend&utm_source=website"
                target="_blank"
                rel="noreferrer"
              >
                <img id="playS" src={Google} alt="..." />
              </a>
            </div>
            <p id="downloadTextthird">Listen us on:</p>
            <div id="inlines">
              <a
                id="space"
                href=" https://open.spotify.com/show/1LKe9GQcPcvMCJXTnrjD2Z"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <img id="spot" src={spotify} alt="..." />{' '}
              </a>
              <a
                id="space"
                href="https://www.jiosaavn.com/shows/neend---sleep-stories-for-adults-in-hindi/4/xt5D1fGpq9k"
                target="_blank"
                rel="noreferrer"
              >
                <img id="spot" src={saavn} alt="..." />
              </a>
              <a
                id="space"
                href=" https://gaana.com/podcast/neend-sleep-stories-for-adults-in-hindi-season-3"
                target="_blank"
              >
                <img id="spot" src={Gana} alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
