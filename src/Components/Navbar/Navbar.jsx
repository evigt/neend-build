import React, { useState }  from 'react';
import './ToggleButton.css';
import '../Navbar/Navbar.css';
import logo from '../../images/Neend Logo.svg';
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const { i18n } = useTranslation()

    const white = "#FFFFFF";
    const yellow = "#F8E71C";
    const [lang,setLang] = useState('eng');
    const [Englishcolor,setEnglishcolor] = useState(yellow);
    const[Hindicolor,setHndicolor] = useState(white);
  
    const TextChanger = (event) =>{
        console.log(event.target.value)
        if(event.target.value === "eng"){
            i18n.changeLanguage('hi');
          setLang('hi');
          setEnglishcolor(white)
          setHndicolor(yellow)
        }else{
          setLang('eng');
          i18n.changeLanguage('en');
          setEnglishcolor(yellow)
          setHndicolor(white)
        }
    }
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="./">
                        <img id="logo" src={logo} alt="" />
                    </a>
                    <div id="content" className="nav navbar-nav navbar-right">
                        <div style={{ marginRight: "1.3rem" }} className="row">
                            <div className="col-md-4 col-4">
                                <h1 style={{color:Englishcolor}} id="hindi">English</h1>
                            </div>
                            <div className="col-md-4 col-4">
                                <label class="switch">
                                    <input onClick={TextChanger} type="checkbox" value={lang}/>
                                    <span   class="slider round">
                                    </span>
                                </label>
                            </div>
                            <div className="col-md-4 col-4">
                                <h1 style={{color:Hindicolor}} id="english">हिन्दी</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default Navbar;
