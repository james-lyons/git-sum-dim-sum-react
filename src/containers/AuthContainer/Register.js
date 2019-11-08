import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { userRegister } from '../../actions/authActions';
import RegisterComponent from '../../components/AuthComponent/Register/RegisterComponent';
import './AuthContainer.css';

class Register extends React.Component {
    state = {
        name: null,
        email: null,
        profile_image: null,
        password: null,
        password2: null,
        modalShow: false,
        errors: null,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            profile_image: this.state.profile_image,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.userRegister(user);
    };

    handleModalShow = () => {
        this.setState({
            modalShow: !this.state.modalShow
        });
    };

    render() {
        return (
            <> 
                <Button className="btn btn-light auth-button" onClick={ () => this.handleModalShow() }>
                    Register
                </Button>
                <RegisterComponent 
                    profile_image={ this.state.profile_image }
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