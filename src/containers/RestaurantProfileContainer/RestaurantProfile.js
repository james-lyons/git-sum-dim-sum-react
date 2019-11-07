import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurantActions';
import { submitReview } from '../../actions/reviewActions';
import { editReview } from '../../actions/reviewActions';
import { deleteReview } from '../../actions/reviewActions';
import RestaurantProfileComponent from
    '../../components/RestaurantProfileComponent/RestaurantProfileComponent';

class RestaurantProfile extends React.Component {
    state = {
        reviewText: null,
        edit_review_display: "none"
    };

    componentDidMount = () => {
        this.props.fetchRestaurant(this.props.match.params.restaurant_slug);
    };

    handleChange = (event) => {
        this.setState({
            reviewText: event.target.value
        });
    };

    submitReview = (event) => {
        event.preventDefault();
        this.props.submitReview(
            this.state.reviewText,
            this.props.restaurant._id,
            this.props.restaurant.name
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
                    reviewErrors={ this.props.reviewErrors }
                    reviewMessage={ this.props.reviewMessage }
                    reviewText={ this.state.reviewText }
                    edit_review_display={ this.state.edit_review_display }
                    handleChange={ this.handleChange }
                    editReviewDisplay={ this.editReviewDisplay }
                    submitReview={ this.submitReview }
                    editReview={ this.editReview }
                    deleteReview={ this.deleteReview }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurantReducer.restaurant,
        reviewErrors: state.reviewReducer.errors,
        reviewMessage: state.reviewReducer.message
    };
};

export default connect(mapStateToProps,
    {
        fetchRestaurant,
        submitReview,
        editReview,
        deleteReview
    })(RestaurantProfile);