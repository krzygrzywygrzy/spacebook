import React, { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "../components/navbar";
import "../css/home.css";
import Cookies from "js-cookie";

const Home = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!Cookies.get("authenticatedUser")) setLocation("/login");
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="home">
        <div></div>
      </div>
    </div>
  );
};

export default Home;
