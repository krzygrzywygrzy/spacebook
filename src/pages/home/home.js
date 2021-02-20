import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import { useLocation } from 'wouter';

function Home (){
    const [location, setLocation] = useLocation();

    useEffect(() => {
        //TODO: redirect after detecting that there is no token cookie
        setLocation("/login");
    }, [])

    return (<div>Home</div>);
}

export default connect()(Home);
