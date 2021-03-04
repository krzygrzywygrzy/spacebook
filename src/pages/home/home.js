import React, { useEffect } from 'react'
import { useLocation } from 'wouter';
import Navbar from '../../components/navbar';
import "./home.css";
import Cookies from 'js-cookie'

function Home() {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        if (!Cookies.get("authenticateUser"))
            setLocation("/login");
    }, [])

    return (<div className="container">
        <Navbar />
        <div className="home">
            <div></div>
        </div>
    </div>
    );
}


export default Home;
