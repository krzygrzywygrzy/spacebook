import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "../components/navbar";
import "../css/home.css";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import Post from "../components/post";

const Home = ({ userName }) => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!Cookies.get("authenticatedUser")) setLocation("/login");
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="welcome">
        Welcome back <span>{userName}</span>!
      </div>
      <div className="home">
        <div className="home-posts">
          <Post/>
        </div>
        <div>friends</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: `${state.auth.fname}`,
  };
};

export default connect(mapStateToProps)(Home);
