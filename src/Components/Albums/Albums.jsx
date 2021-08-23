import smile from '../../images/smiling.png';
import camel from '../../images/camel.png';
import man from '../../images/man.png';
import youtube from '../../images/youtube.png';
import spotify from '../../images/spotify.svg';
import Gana from '../../images/gaana.svg';
import saavn from '../../images/saavn.svg';
import '../Albums/Albums.css';
const Albums = () => {
  return (
    <>
      <div style={{ marginTop: '73px' }} className="container">
        <div id="inner" className="container">
          <div className="row">
            <div className="col-lg-12">
              _{' '}
              <div id="nrow" className="row">
                <div className="col-lg-2  col-2">
                  <div class="card">
                    <img
                      id="smile"
                      src={smile}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p id="albumText" class="card-text">
                        Learn how to sleep better?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-2">
                  <div class="card">
                    <img
                      id="smile"
                      src={camel}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p id="albumText" class="card-text">
                        Rajisthan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-2">
                  <div class="card">
                    <img id="smile" src={man} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p id="albumText" class="card-text">
                        Learn how to sleep better?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  <div className="SubscibeOption">
                    <a href="https://www.youtube.com/c/Neend1" target="_blank">
                      {' '}
                      <img
                        id="youtubeimg"
                        style={{ position: 'absolute' }}
                        src={youtube}
                      />
                    </a>
                    <div id="allign">
                      <h1 className="Needlogo">Neend</h1>
                      <p className="subscriber">9.0k subscriber</p>
                    </div>
                  </div>
                  <p id="para">
                    For latest Stories and updates, subscribe to our Youtube
                    Channel
                  </p>
                  <a href="https://www.youtube.com/c/Neend1" target="_blank">
                    <button id="btnstl">SUBSCRIBE NOW</button>
                  </a>
                  <br></br>
                  <br></br>
                  <p id="para">Listen us on:</p>
                  <div id="inlines">
                    <a
                      id="space"
                      href=" https://open.spotify.com/show/1LKe9GQcPcvMCJXTnrjD2Z"
                      target="_blank"
                    >
                      {' '}
                      <img id="spot" src={spotify} />{' '}
                    </a>
                    <a
                      id="space"
                      href="https://www.jiosaavn.com/shows/neend---sleep-stories-for-adults-in-hindi/4/xt5D1fGpq9k"
                      target="_blank"
                    >
                      <img id="spot" src={saavn} />
                    </a>
                    <a
                      id="space"
                      href=" https://gaana.com/podcast/neend-sleep-stories-for-adults-in-hindi-season-3"
                      target="_blank"
                    >
                      <img id="spot" src={Gana} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Albums;
