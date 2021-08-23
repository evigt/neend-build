import React from 'react';
import './ToggleButton.css';
import '../Navbar/Navbar.css';
import logo from '../../images/Neend Logo.svg';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img id="logo" src={logo} alt="" />
          </a>
          {/* <div id="content" className="nav navbar-nav navbar-right">
                        <div style={{ marginRight: "1.3rem" }} className="row">
                            <div className="col-md-4 col-4">
                                <h1 id="hindi">English</h1>
                            </div>
                             <div className="col-md-4 col-4">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div className="col-md-4 col-4">
                                <h1 id="english">Hindi</h1>
                            </div>
                        </div>
                    </div> */}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
