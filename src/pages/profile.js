import React, { useEffect } from "react";
import "../css/profile.css";
import { connect } from "react-redux";
import Navbar from "../components/navbar";
import useGetConcreteUser from "../hooks/useGetConcreteUser";

function ProfilePage({ id, auth }) {
  const user = useGetConcreteUser();

  useEffect(() => console.log(user), [user]);

  return (
    <div className="container">
      <Navbar />
      <div className="profile">
        <section className="profile-showcase">
          <div className="profile-photo">
            <div className="photo"></div>
          </div>
          <div className="profile-info">
            <div className="profile-basic">
              <span>Name Surname</span>
              {id !== auth.id ? (
                <div>
                  <div
                    className="btn"
                    onClick={() => {
                      throw Error("Sending message unimplemented!!!");
                    }}
                  >
                    Send Message
                  </div>
                  <div
                    className="btn"
                    onClick={() => {
                      throw Error("Adding friends unimplemented!!!");
                    }}
                  >
                    Add friend
                  </div>
                </div>
              ) : (
                <div className="btn">Edit</div>
              )}
            </div>
            <div className="additional-descriptions">
              {/* TODO: read this from api */}
              <div>Posts:12 Friends:12</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </section>

        <section className="posts-container">
          <div className="secttion-title">
            <span>Posts</span>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProfilePage);
