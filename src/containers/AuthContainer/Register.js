import React from 'react';
import RegisterComponent from '../../components/Auth/Register/RegisterComponent';

class Register extends React.Component {
    state = {

    };

    render() {
        return (
            <>
                <div>This is the register page</div>
                <RegisterComponent />
            </>
        );
    };
};

export default Register;