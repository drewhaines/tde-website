import React from "react";
import SEO from "../components/seo";
import Programming from "../components/images/programming";
import { Link } from "gatsby";

const HomePage = () => {
  return (
    <div>
      <SEO title="Become a web developer | The Dev Experience" />
      <div className="main_section">
        <div className="title_grid">
          <div className="title_wrapper">
            <h1 className="title">
              {"Become a "}
              <br className="show_xs" />
              <span className="highly_skilled">{"highly skilled "}</span>
              <br />
              software developer
            </h1>
            <h2 className="subtitle">Learn modern technologies</h2>
            <h2 className="subtitle">Build your own apps</h2>
            <h2 className="subtitle">Get hired by tech companies</h2>
          </div>
          <div style={{ display: "grid", height: "100%", position: "relative" }}>
            <div className="btn_main">
              <Link to="/courses">
                <button class="btn_main_cta btn_success">Get Started</button>
              </Link>
            </div>
            <Programming className="programming" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
