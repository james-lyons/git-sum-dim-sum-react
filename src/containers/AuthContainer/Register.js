import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { userRegister } from '../../actions/authActions';
import RegisterComponent from '../../components/AuthComponent/Register/RegisterComponent';

class Register extends React.Component {
    state = {
        name: null,
        email: null,
        password: null,
        password2: null,
        errors: null,
        modalShow: false,
        errors: null,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(user)
        this.props.userRegister(user)
    };

    handleModalShow = () => {
        this.setState({
            modalShow: !this.state.modalShow
        });
    };

    render() {
        return (
            <> 
                <Button variant="primary" onClick={ () => this.handleModalShow() }>
                    Register
                </Button>
                <RegisterComponent 
                    show={ this.state.modalShow }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    onHide={ this.handleModalShow }
                />
            </>
        );
    };
};

export default connect(null, { userRegister })(Register);