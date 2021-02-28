import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./auth.css";
import { useLocation } from 'wouter';
import { actionSignUp } from '../../redux/actions/authActions';

function SignupPage() {
    const [location, setLocation] = useLocation();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmit = () => {
        throw Error("Unimplemented");
    }

    return (<div className="auth">
        <div className="auth-title">
            <span>Spacebook</span> sign up
        </div>
        <div className="auth-form">
            <input type="text" value={name} placeholder="name"
                onChange={(e) => { setName(e.target.value) }} />
            <input type="text" value={surname} placeholder="surname"
                onChange={(e) => { setSurname(e.target.value) }} />
            <input type="text" value={email} placeholder="email"
                onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" value={password} placeholder="password"
                onChange={(e) => { setPassword(e.target.value) }} />
            <input type="text" value={phoneNumber} placeholder="phone"
                onChange={(e) => { setPhoneNumber(e.target.value) }} />
            <div className="auth-form-submit">
                <div className="submit-btn" onClick={onSubmit}><span>sign up</span></div>
                <div className="redirect-link" onClick={() => setLocation("/login")}>log in</div>
            </div>
        </div>
        <footer>
            <span>Spacebook &copy; all rights reserved</span>
        </footer>
    </div>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionSignUp: (data,) => dispatch(actionSignUp(data)),
    };
}

export default connect(null, mapDispatchToProps)(SignupPage);