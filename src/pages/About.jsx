// import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About <br />
      <Link to={"/blog/"}>Home</Link>
    </div>
  );
};

export default About;
