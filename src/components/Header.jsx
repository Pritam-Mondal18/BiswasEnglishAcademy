import React, { useState } from "react";
import "./Header.css";
// import { Link as ScrollLink } from "react-scroll";
// import { NavLink as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import { FaMoon } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const Header = ({
  homeRef,
  aboutRef,
  contactRef,
  gallaryRef,
  reviewRef,
  servicesRef,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  // Scroll to the referenced section
  const scrollToElement = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Placeholder for dark mode toggle
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* <RouterLink to="/">
          <img
            src="/Biswas-English-Academy/images/Final-logo.jpg"
            alt="Logo"
            className="logo"
          />
        </RouterLink> */}
        <a href="/">
          <img
            src="/Biswas-English-Academy/images/Final-logo.jpg"
            alt="Logo"
            className="logo"
          />
        </a>

        <h3 className="heading">Biswas English Academy</h3>
        <ul className={`menu-items ${showMenu ? "menu-mobile" : "menu-web"}`}>
          <li>
            <span
              onClick={() => {
                scrollToElement(homeRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              Home
            </span>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(homeRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink> */}
          </li>
          <li>
            <span
              onClick={() => {
                scrollToElement(aboutRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              About
            </span>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(aboutRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink> */}
          </li>
          <li>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(servicesRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Services
            </ScrollLink> */}
            <span
              onClick={() => {
                scrollToElement(servicesRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              Services
            </span>
          </li>
          <li>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(gallaryRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Gallery
            </ScrollLink> */}
            <span
              onClick={() => {
                scrollToElement(gallaryRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              Gallery
            </span>
          </li>
          <li>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(reviewRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Review
            </ScrollLink> */}
            <span
              onClick={() => {
                scrollToElement(reviewRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              Review
            </span>
          </li>
          <li>
            {/* <ScrollLink
              onClick={() => {
                scrollToElement(contactRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink> */}
            <span
              onClick={() => {
                scrollToElement(contactRef);
                setShowMenu(false);
              }}
              // smooth={true}
              // duration={500}
            >
              Contact
            </span>
          </li>
        </ul>
        {/* <FaMoon onClick={toggleMode} className="toggle-icon" />*/}
        <IoPersonCircle className="toggle-icon login" />
        <span className="menu-icon" onClick={handleMenuToggle}>
          {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </span>
      </div>
    </>
  );
};

export default Header;
