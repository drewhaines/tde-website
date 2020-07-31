import React from "react";
import { Link } from "gatsby";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Link to="/top-3-programming-languages-for-beginners/">Blog post 1</Link>
      <br />
      <br />
      <Link to="/college-bootcamp-or-self-taught/">Blog post 2</Link>
    </div>
  );
};

export default Blog;
