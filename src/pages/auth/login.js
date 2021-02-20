import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./auth.css";
import { useLocation } from 'wouter';


function LoginPage() {
    const [location, setLocation] = useLocation();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        console.log(login,password);
    }

    return (<div className="auth">
        <div className="auth-title">
            <span>Spacebook</span>
        </div>
        <div className="auth-form">
            <input type="text" value={login} placeholder="phone/email"
                onChange={(e) => { setLogin(e.target.value) }} /><br />
            <input type="password" value={password} placeholder="password"
                onChange={(e) => { setPassword(e.target.value) }} /><br />
            <div className="auth-form-submit">
                <div className="submit-btn" onClick={onSubmit}><span>log in</span></div>
                <div className="redirect-link" onClick={()=> setLocation("/signup")}>sign up</div>
            </div>
        </div>
        <footer>
            <span>Spacebook &copy; all rights reserved</span>
        </footer>
    </div>);
}

export default connect()(LoginPage);