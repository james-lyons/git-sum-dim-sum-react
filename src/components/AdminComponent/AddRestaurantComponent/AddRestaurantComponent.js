import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button, Image } from 'react-bootstrap';
import { addRestaurant } from '../../../actions/adminActions';
import '../AdminPageCss.css';

class AdminPageComponent extends React.Component {
    state = {
        name: null,
        menuLink: null,
        hours: null,
        phone: null,
        address: null,
        city: null,
        restaurant_image: null,
        errors: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    submitRestaurant = (event) => {
        event.preventDefault();
        const newRestaurant = {
            name: this.state.name,
            menuLink: this.state.menuLink,
            hours: this.state.hours,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            restaurant_image: this.state.restaurant_image
        };
        this.props.addRestaurant(newRestaurant)
    };

    render() {
        return (
            <>
                <div className="row" id="create-dim-sum-form-div">
                    { this.props.errors && this.props.errors.map((e, i) => (
                        <div className="alert alert-danger alert-dismissible fade show col-12"
                            role="alert" key={ i }>
                            { e.message }
                            <button className="close" data-dismiss="alert">
                                <span aria-hidden="true">&times;</span>
                            </button>    
                        </div>
                    ))}
                    { this.props.message &&
                        <div className="alert alert-danger alert-dismissible fade show col-12"
                            role="alert">
                            { this.props.message }
                            <button className="close" data-dismiss="alert">
                                <span aria-hidden="true">&times;</span>
                            </button>    
                        </div>
                    }
                        <Form onSubmit={ this.submitRestaurant } className="restaurant-submit-admin-form">
                            <Form.Group className="col-12" controlId="name">
                                <Form.Label>Restaurant Name</Form.Label>
                                <Form.Control
                                    required
                                    name="name"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="Dim Sum"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="col-12" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    name="city"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="Frisco Town"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>  
                            <Form.Group className="col-12" controlId="address">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    required
                                    name="address"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="225 Bush St. San Francisco, Ca."
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>                   
                            <Form.Group className="col-12" controlId="menuLink">
                                <Form.Label>Restaurant Hours</Form.Label>
                                <Form.Control
                                    required
                                    name="hours"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="8:00am - 5:00pm"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="col-12" controlId="menuLink">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control
                                    required
                                    name="phone"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="(916)943-4391"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="col-12" controlId="menuLink">
                                <Form.Label>Menu Link</Form.Label>
                                <Form.Control
                                    required
                                    name="menuLink"
                                    type="text"
                                    onChange={ this.handleChange }
                                    placeholder="menu link goes here"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>  
                            <Form.Group className="col-12" controlId="restaurant_image">
                            <Form.Label>Restaurant Image</Form.Label>
                                <Form.Control 
                                    required
                                    name="restaurant_image"
                                    type="text"
                                    onChange={ this.handleChange }
                                />
                            </Form.Group>
                            <Col id="restaurant-image" as={Col} md="3" xs={6}>
                                <Image src={ this.state.restaurant_image } thumbnail />
                            </Col>        
                        <Button className="auth-button" type="submit">Submit</Button>
                    </Form>
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        errors: state.adminReducer.errors,
        message: state.adminReducer.message
    };
};

export default connect(mapStateToProps, { addRestaurant })(AdminPageComponent);