import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./images/tde-logo";

const Header = ({ siteTitle }) => (
  <div>
    <div className="dark">
      <div className="logo_wrapper">
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Image />
        </Link>
      </div>
    </div>
    <div className="nav_border">
      <div className="nav_grid">
        <div>
          <Link to="/courses" className="nav-item red">
            Courses
          </Link>
        </div>
        <div>
          <Link to="/blog" className="nav-item yellow">
            Blog
          </Link>
        </div>
        <div>
          <Link to="/about" className="nav-item blue">
            About
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
