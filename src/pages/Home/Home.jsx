// eslint-disable-next-line no-unused-vars
import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";

import LiveClockUpdate from "../../components/LiveClockUpdate/LiveClockUpdate";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/BNaurVSeS57NeyWI/scene.splinecode" />
      </div>

      <div className="hero-header">
        <h1>Artistry and Engineering</h1>
        <h1>By Ratan.</h1>
      </div>

      <div className="home-logo">
        <h4  className="text">R A T A N</h4>
      </div>

      <div className="live-clock">
        <LiveClockUpdate />
      </div>
    </>
  );
};

export default Home;
