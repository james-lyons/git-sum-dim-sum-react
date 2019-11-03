import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SearchBarComponent.css'

const SearchBarComponent = (props) => {
    return (
        <>
            <div id="restaurant-search" className="justify-content-md-center">
                <Form onSubmit={ props.handleSubmit }>
                    <Form.Row className="justify-content-md-center">
                        <Form.Group className="col-5 search-form" controlId="name">
                            <Form.Control
                                name="name"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="Restaurant Name"
                            />
                        </Form.Group>
                        <Form.Group className="col-5 search-form" controlId="name">
                            <Form.Control
                                name="city"
                                type="text"
                                onChange={ props.handleChange }
                                placeholder="City Name"
                            />
                        </Form.Group>
                        <Button type="search" className="btn btn-secondary">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                    </Form.Row>
                </Form>
            </div>
        </>
    );
};

export default SearchBarComponent;