import React, { useEffect, useState } from 'react';
import './profile.css';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar';
import getUserService from '../../services/getUserService';


function ProfilePage({ id, auth }) {
    const [userData, setUserData] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (id === auth._id)
            setUserData(auth);
        else
            fetchUserData()
    }, []);

    const fetchUserData = async () => {
        let data = await getUserService(id);
        if (data.errors) {
            //TODO: error handling
        } else {
            setUserData(data.user);
            setLoaded(true);
        }
    }

    return (<div className="container">
        <Navbar />
        <div className="profile"></div>
        {/*TODO: make better loading layout */}
        {loaded === false ? <div>loading</div> : <div>{userData._id}</div>}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(ProfilePage);