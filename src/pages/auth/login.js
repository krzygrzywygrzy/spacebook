import React from 'react';
import { connect } from 'react-redux';
import "./auth.css";
import { useLocation } from 'wouter';

function LoginPage() {
    const [location, setLocation] = useLocation();


    return (<div className="auth">
        <div className="auth-title">
            <span>Spacebook</span>
        </div>
        <div className="auth-form">
            <input type="text" placeholder="phone/email" /><br />
            <input type="password" placeholder="password" /><br />
            <div className="auth-form-submit">
                <div className="submit-btn"><span>log in</span></div>
                <div className="redirect-link">sign up</div>
            </div>
        </div>
        <footer>
            <span>Spacebook &copy; all rights reserved</span>
        </footer>
    </div>);
}

export default connect()(LoginPage);