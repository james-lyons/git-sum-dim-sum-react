import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginComponent.css';

const LoginComponent = (props) => {
    return (
        <>
            <Modal
                { ...props }
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="login-modal">
                    <div className="row">
                        { props.errors && props.errors.map((err, i) => (
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{ width: '100%' }} role="alert" key={ i }>
                                    { err.message }
                                    <button className="close" data-dismiss="alert">
                                        <spam aria-hidden="true">&times;</spam>
                                    </button>
                                </div>
                        ))}
                        { props.message && 
                            <div className="alert alert-danger alert-dismissible fade show"
                                style={{ width: '100% '}} role="alert">
                                { props.message }
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                        <Form onSubmit={ props.handleSubmit } className="col-12">
                            <Form.Row>
                                <Form.Group className="col-12" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        name="email"
                                        type="email"
                                        onChange={ props.handleChange }
                                        placeholder="email@email.com"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group className="col-12" controlId="password">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control
                                        required
                                        name="password"
                                        type="password"
                                        onChange={ props.handleChange }
                                        placeholder="password"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        errors: state.authReducer.errors,
        message: state.authReducer.message
    }
}

export default connect(mapStateToProps, null)(LoginComponent);