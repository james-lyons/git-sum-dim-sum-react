import React from 'react';
import { connect } from 'react-redux';
import RestaurantsComponents from '../../components/RestaurantsComponent/RestaurantsComponents';
import { fetchAllRestaurants } from '../../actions/restaurantActions';

class Restaurants extends React.Component {
    state = {
        name: null,
        restaurants: null,
    };

    componentDidMount = () => {
        this.props.fetchAllRestaurants()
            .then(this.setState({ restaurants: this.props.restaurants }));
    };

    render() {
        return (
            <>
                <RestaurantsComponents />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurantReducer.restaurants
    }
}

export default connect(mapStateToProps, { fetchAllRestaurants })(Restaurants);