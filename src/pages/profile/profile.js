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
        <div className="profile">
            {/*TODO: make better loading layout */}
            {loaded === false ? <div className="loading"><span>loading</span></div>
                : <section className="profile-showcase">
                    <div className="profile-photo">
                        <div className="photo"></div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-basic">
                            <span>{userData.fname} {userData.surname}</span>
                            {id !== auth.id ? <>
                                <div className="btn" onClick={() => { throw Error("Sending message unimplemented!!!") }}>
                                    Send Message
                                </div>
                                <div className="btn" onClick={() => { throw Error("Adding friends unimplemented!!!") }}>
                                    Add friend
                                </div>
                            </> :
                                <div className="btn">Edit</div>
                            }
                        </div>
                        <div className="additional-descriptions">
                            {/* TODO: read this from api */}
                            <div>Posts:12  Friends:12</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>

                </section>}
            <section className="posts-container">
                <div className="secttion-title"><span>Posts</span></div>
                <div></div>
            </section>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(ProfilePage);