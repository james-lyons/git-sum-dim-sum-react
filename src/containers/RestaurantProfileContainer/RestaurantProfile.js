import React from 'react';
import { connect } from 'react-redux';
import { Col, Form, Button } from 'react-bootstrap';
import { fetchRestaurant } from '../../actions/restaurantActions';
import { submitReview } from '../../actions/reviewActions';
import { editReview } from '../../actions/reviewActions';
import { deleteReview } from '../../actions/reviewActions';
import RestaurantProfileComponent from '../../components/RestaurantProfileComponent/RestaurantProfileComponent';

class RestaurantProfile extends React.Component {
    state = {
        reviewText: null,
        edit_review_display: "none"
    };

    componentDidMount = () => {
        this.props.fetchRestaurant(this.props.match.params.restaurant_slug);
    }

    handleChange = (event) => {
        this.setState({
            reviewText: event.target.value
        });
    };

    submitReview = (event) => {
        event.preventDefault();
        console.log(this.state.reviewText)
    };

    editReview = (review_id) => {
        return (
            <Col className="col-12" style={{ display: this.state.edit_review_display }}>
                <Form onSubmit={ () => this.props.editReview(review_id, this.state.reviewText )}>
                    <Form.Row>
                        <Form.Group className="col-12" controlId="edit-review">
                            <Form.Control
                                required
                                name="reviewText"
                                type="text"
                                as="textarea"
                                rows="4"
                                onChange={ this.handleChange }
                                placeholder="Edit review"
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        )
    };

    deleteReview = () => {
        console.log('delete')
    }

    mapReviews = (reviews) => {
        const reviewArray = reviews.map(review => 
            <div className="review-card">
                <h1>Review: { review.author }</h1>
                <h1>Review: { review.reviewText }</h1>
            </div>
        );
        return reviewArray;
    };

    mapButtons = (review_id) => {
        return (
            <>
                <div className="edit-and-delete-buttons">
                    <Button className="edit-button" onClick={console.log('edit')}>Edit</Button>
                    <Button className="edit-button" onClick={console.log('delete')}>Edit</Button>
                </div>
            </>
        );
    };

    editReviewDisplay = () => {
        this.state.edit_review_display === "none" ?
        this.setState({ edit_review_display: "" }) :
        this.setState({ edit_review_display: "none"});
    };

    render() {
        return (
            <>
                <RestaurantProfileComponent
                    handleChange={ this.handleChange }
                    submitReview={ this.submitReview }
                    deleteReview={ this.deleteReview }
                    deleteReview={ this.deleteReview }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurantReducer.restaurant
    };
};

export default connect(mapStateToProps,
    {
        fetchRestaurant,
        submitReview,
        editReview,
        deleteReview
    })
(RestaurantProfile);