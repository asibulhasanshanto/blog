// import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Layout from "../layouts/Layout";
import mern_img from "../assets/images/mern.jpeg";
import solidity_img from "../assets/images/solidity.png";
const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container mt-4 mx-auto p-2 ">
        <div className="grid grid-cols-4 space-x-4 ">
          <div className="category-card ">
            <img
              src={solidity_img}
              className="w-full h-48 object-cover"
              alt="solidity"
            />
            <h3 className="text-2xl p-2 text-gray-900">Solidy and Etherium</h3>
          </div>

          <div className="category-card ">
            <img
              src={mern_img}
              className=" w-full h-48  objectcoverr"
              alt="mern"
            />
            <h3 className="text-2xl p-2 text-gray-900">MERN</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
