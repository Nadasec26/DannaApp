import React, { useEffect, useState } from "react";
import Logo from "../../images/LOGO 1.svg";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import DropdownMenu from "../../Dashboard/AppBar/ProfileMenu.js";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/userActions.js";

// Throttle function to limit the freq[uency of scroll event handling
const throttle = (callback, delay) => {
  let lastTime = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      callback();
      lastTime = now;
    }
  };
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [book, setBook] = useState("/Book");
  const [read, setRead] = useState("/Questions");

  useEffect(() => {
    (async () => await getUser(dispatch))();

    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 100);
    }, 50);

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <span
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chatbot">
                  Chatbot
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productpage">
                  Supplies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to={book}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Book a...
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/Book"
                      onClick={() => setBook("/Book")}
                    >
                      Incubation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/doctors"
                      onClick={() => setBook("/doctors")}
                    >
                      Doctor
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to={read}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Read or Watch...
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/Questions"
                      onClick={() => setRead("/Questions")}
                    >
                      Community
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/articles"
                      onClick={() => setRead("/articles")}
                    >
                      Articles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/videos"
                      onClick={() => setRead("/videos")}
                    >
                      Videos
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <DropdownMenu
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              user={user}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
