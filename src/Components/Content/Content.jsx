import React from 'react';
import Apple from '../../images/appStore.svg';
import Google from '../../images/google.png';
import mobile from '../../images/mobile.png';
import '../Content/Content.css';
import { useTranslation } from 'react-i18next'


const CenterText = () => {
    const { t} = useTranslation()
    return (
        <>
            <div id="w" className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="row">
                            <div className="col-lg-8" style={{ marginTop: "10%" }}>
                                <h1 id="text">{t('RELAXING')} <span id="span"> {t('SLEEP STORIES')}</span></h1>
                                <h1 id="text">{t('YOG NIDRA')} <span id="span" >{t('INSPIRED STORIES')}</span></h1>
                                <h1 id="text">{t('CALMING & SOOTHING')}<span id="span" >{t('MUSIC')}</span></h1>
                                <div style={{ marginTop: "13%" }} className="container">
                                    <img id="fmobile" src={mobile} alt="mobile" className="mx-auto" />
                                    <div id="playstoreButton" className="row">
                                        <div className="col-lg-4 col-6">
                                            <p id="avail">{t('Available on')}</p>
                                            <a href="https://play.google.com/store/apps/details?id=com.neend&utm_source=website" target="_blank" rel="noreferrer"><img id="play" src={Google} alt="playstore" /></a>
                                        </div>
                                        <div id="btnwidth" className="col-lg-4 col-6">
                                            <p id="avails">{t('Coming soon')}</p>
                                          <img id="play" src={Apple} alt="AppStore" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "1px" }} className="col-lg-4">
                                <img id="mobile" src={mobile} alt="mobile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CenterText;