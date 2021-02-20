import React from 'react';
import { connect } from 'react-redux';
import "./auth.css";

function LoginPage() {
    return (<div className="auth">
        <div className="auth-title">
            <span>Spacebook</span>
        </div>
        <div className="auth-form">
            <input type="text"/>
        </div>
    </div>);
}

export default connect()(LoginPage);