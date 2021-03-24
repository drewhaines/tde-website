import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { jsx, Box } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

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
          <Box
            sx={{
              maxWidth: ['85%', 450],
              mx: 'auto',
              mt: [2, 0],
              transition: ['none', 'all 0.5s'],
              '&:hover': {transform: [ 'none', 'scale(1.1, 1.1)']}
            }}
          >
            <StaticImage
              src="../images/tde_logo_long_dark.png"
              alt="the dev experience - learn to code"
            />
          </Box>
          
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
