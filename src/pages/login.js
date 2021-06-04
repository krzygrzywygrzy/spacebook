import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../css/auth.css";
import { useLocation } from "wouter";
import { actionLogIn } from "../redux/actions/authActions";

function LoginPage({ actionLogIn }) {
  const [, setLocation] = useLocation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="auth-title">
        <span>Spacebook</span>
      </div>
      <div className="auth-form">
        <input
          type="text"
          value={login}
          placeholder="phone/email"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <div className="auth-form-submit">
          <div
            className="submit-btn"
            onClick={() =>
              actionLogIn({ login, password }, () => {
                setLocation("/");
              })
            }
          >
            <span>log in</span>
          </div>
          <div className="redirect-link" onClick={() => setLocation("/signup")}>
            sign up
          </div>
        </div>
      </div>
      <footer>
        <span>Spacebook &copy; all rights reserved</span>
      </footer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionLogIn: (data, react) => dispatch(actionLogIn(data, react)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
