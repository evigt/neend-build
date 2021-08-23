
import Apple from '../../images/appStore.svg';
import Google from '../../images/google.png';
import mobile from '../../images/mobile.png';
import ReactAudioPlayer from 'react-audio-player';
import '../Content/Content.css';



const CenterText = () => {
    return (
        <>
            <div id="w" className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="row">
                            <div className="col-lg-8" style={{ marginTop: "10%" }}>
                                <h1 id="text">RELAXING <span id="span"> Sleep Stories</span></h1>
                                <h1 id="text">YOG NIDRA <span id="span" > Inspired Stories</span></h1>
                                <h1 id="text">CALMING & SOOTHING<span id="span" > Music</span></h1>
                                <div style={{ marginTop: "13%" }} className="container">
                                    <img id="fmobile" src={mobile} alt="mobile" className="mx-auto" />
                                    <div id="playstoreButton" className="row">
                                        <div className="col-lg-4 col-6">
                                            <p id="avail">Availavle on</p>
                                            <a href="https://play.google.com/store/apps/details?id=com.neend&utm_source=website" target="_blank"><img id="play" src={Google} alt="playstore" /></a>
                                        </div>
                                        <div id="btnwidth" className="col-lg-4 col-6">
                                            <p id="avails">Comming soon</p>
                                            <a href=""><img id="play" src={Apple} alt="AppStore" /></a>
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