import React from 'react';
import smile from '../../images/smiling.png';
import camel from '../../images/camel.png';
import man from '../../images/man.png';
import youtube from '../../images/youtube.png';
import spotify from '../../images/spotify.svg';
import Gana from '../../images/gaana.svg';
import saavn from '../../images/saavn.svg';
import '../Albums/Albums.css';
import { useTranslation } from 'react-i18next'
const Albums = () => {
    const {t} = useTranslation();
    return (
        <>
             <div style={{ marginTop: "73px" }} className="container">
                <div id="inner" className="container">
                    <div className="row">
                        <div  className="col-lg-12">
                    _    <div id="nrow" className="row">
                        <div className="col-lg-2  col-2">
                            <div className="card">
                                <img id="smile" src={smile} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p id="albumText" className="card-text">{t('Learn how to sleep better?')}</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-2  col-2">
                            <div className="card">
                                <img id="smile" src={camel} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p id="albumText" className="card-text">{t('Registhan')}</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-2  col-2">
                            <div className="card">
                                <img id="smile" src={man} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p id="albumText" className="card-text">{t(' Eidgaah by Munshi Premchand ')}</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div   className="col-lg-5">
                            <div className="SubscibeOption">
                               <a href="https://www.youtube.com/c/Neend1" target="_blank" rel="noreferrer"> <img id="youtubeimg"style={{position:"absolute"}} src={youtube} alt="..." /></a>
                                <div id="allign">
                                   <h1 className="Needlogo">Neend</h1>
                                   <p className="subscriber">12.0k subscriber</p>
                                </div>
                                </div>
                                <p id="para">{t('For latest Stories and updates, subscribe to our Youtube Channel')}</p>
                                <a href="https://www.youtube.com/c/Neend1" target="_blank" rel="noreferrer"><button id="btnstl">SUBSCRIBE NOW</button></a>
                                <br></br>
                                <br></br>
                                <p id="para">Listen us on:</p>
                                <div id="inlines">
                            <a id="space" href=" https://open.spotify.com/show/1LKe9GQcPcvMCJXTnrjD2Z" rel="noreferrer" target="_blank"> <img id="spot" src={spotify} alt="..." /> </a>
                           <a id="space" href="https://www.jiosaavn.com/shows/neend---sleep-stories-for-adults-in-hindi/4/xt5D1fGpq9k" rel="noreferrer" target="_blank"><img id="spot" src={saavn}  alt="..."/></a> 
                           <a id="space" href=" https://gaana.com/podcast/neend-sleep-stories-for-adults-in-hindi-season-3" rel="noreferrer" target="_blank"><img id="spot" src={Gana}  alt="..." /></a> 
                        </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Albums;