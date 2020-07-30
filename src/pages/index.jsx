import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Drew from "../components/drew-image";

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Become a web developer | The Dev Experience" />
      <div className="main_section">
        <div className="title_grid">
          <h1
            style={{
              fontSize: 28,
              fontFamily: "Lato",
            }}
          >
            Hi there!
            <br />
            <br />
            Become a highly skilled web developer.
            <br />
            <br />
            Learn modern technologies, build your own apps, and find work in the software industry.
          </h1>
          <div>
            <Drew className="drew" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
