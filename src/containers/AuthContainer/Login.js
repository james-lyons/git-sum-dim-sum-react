import React from 'react';
import LoginComponent from '../../components/Auth/Login/LoginComponent';

class Login extends React.Component {
    state = {

    };

    render() {
        return (
            <>
                <div>This is the login page</div>
                <LoginComponent />
            </>
        );
    };
};

export default Login;