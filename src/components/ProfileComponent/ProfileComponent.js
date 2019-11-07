import React from 'react';
import { connect } from 'react-redux';
import { Col, Form, Button } from 'react-bootstrap';
import { editReview, deleteReview } from '../../actions/reviewActions';
import './ProfileComponent.css'

const ProfileComponent = (props) => {

    const mapReviews = (reviews) => {
        const currentUser = localStorage.getItem('uid');
        const reviewArray = reviews.map(review =>
            <div className="profile-review-card">
                <h4>{ review.restaurant_name }</h4>
                <p>{ review.reviewText }</p>
                { review.author === currentUser && mapButtons(review._id)}
                { review.author === currentUser && editReview(review._id) }
            </div>
        );
        return reviewArray;
    };

    const mapButtons = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="review-buttons btn btn-danger"
                        onClick={ () => props.editReviewDisplay() }
                    >
                            Edit
                    </Button>
                    <Button className="review-buttons btn btn-danger"
                        onClick={ () => props.deleteReview(review_id) }
                    >
                        Delete
                    </Button>
                </div>
            </>
        );
    };

    const editReview = (review_id) => {
        return (
            <Col className="col-12 review-edit-form"
                style={{ display: props.edit_review_display }}>
                <Form onSubmit={ () => props.editReview(review_id, props.reviewText )}>
                    <Form.Row>
                        <Form.Group className="col-12" controlId="edit-review">
                            <Form.Control
                                required
                                name="reviewText"
                                type="text"
                                as="textarea"
                                rows="4"
                                onChange={ props.handleChange }
                                placeholder="Edit review"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button className="btn btn-danger" type="submit">
                        Submit Edit
                    </Button>
                </Form>
            </Col>
        );
    };

    return (
        <>
            <div className="profile-div">
                <div className="profile-content">
                    <div className="profile-content-div">
                        <h2>Hello, { props.name }</h2>
                        <h4>Reviews you've left: { props.reviews.length }</h4>
                    </div>
                </div>
                <div className="profile-reviews">
                    <h2>Your reviews</h2>
                    { props.reviews && mapReviews(props.reviews) }
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        errors: state.reviewReducer.errors,
        message: state.reviewReducer.message,
    }
}

export default connect(mapStateToProps, { editReview, deleteReview } )(ProfileComponent);
