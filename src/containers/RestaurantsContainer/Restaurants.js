import React from 'react';
import { connect } from 'react-redux';
import RestaurantsComponents from '../../components/RestaurantsComponent/RestaurantsComponents';
import { fetchAllRestaurants, fetchRestaurant } from '../../actions/restaurantActions';
import './Restaurants.css';

class Restaurants extends React.Component {
    state = {
        name: null,
        restaurants: null,
    };

    componentDidMount = () => {
        this.props.fetchAllRestaurants()
            .then(this.setState({ restaurants: this.props.restaurants }));
    };

    selectRestaurant = (restaurant_slug) => {
        this.props.history.push(`/restaurant/${ restaurant_slug }`)
    }

    render() {
        return (
            <>
                <div id="restaurants-div">
                    <RestaurantsComponents selectRestaurant={ this.selectRestaurant }/>
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurantReducer.restaurants
    }
}

export default connect(
    mapStateToProps,
    { fetchAllRestaurants, fetchRestaurant }
    )(Restaurants);