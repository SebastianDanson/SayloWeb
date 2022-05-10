import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <img
                src="images/icon.png"
                alt=""
                className="navbar-icon"
                onClick={closeMobileMenu}
              />
              {/* <MdFingerprint
                className="navbar-icon"
                onClick={closeMobileMenu}
              /> */}
              Saylo
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  //   to="/contactUs"
                  className="nav-links"
                  to="#"
                  onClick={(e) => {
                    closeMobileMenu();

                    window.location.href = "mailto:seb@saylo.chat";

                    e.preventDefault();
                  }}
                >
                  Contact Us
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link
                    to={
                      "//apps.apple.com/ca/app/saylo-video-messenger/id1603124967"
                    }
                    target="_blank"
                    className="btn-link"
                  >
                    <Button buttonStyle="btn--outline">Download</Button>
                  </Link>
                ) : (
                  <Link
                    onClick={closeMobileMenu}
                    target="_blank"
                    to={
                      "//apps.apple.com/ca/app/saylo-video-messenger/id1603124967"
                    }
                    className="btn-link"
                  >
                    <Button
                      onClick={closeMobileMenu}
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                    >
                      Download
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
