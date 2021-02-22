import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'wouter';
import Navbar from '../../components/navbar';
import "./home.css";

function Home({ auth }) {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        if (auth.token === "")
            setLocation("/login");
    }, [])

    return (<div className="home-container">
        <Navbar />
        <div className="home">
        </div>
    </div>
    );
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Home);
