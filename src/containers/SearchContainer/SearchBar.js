import React from 'react';
import { connect } from 'react-redux';
import SearchBarComponent from '../../components/SearchComponent/SearchBarComponent';
import { fetchRestaurants } from '../../actions/restaurantActions';

class SearchBar extends React.Component {
    state = {
        name: "",
        city: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const city = this.state.city;
        this.props.fetchRestaurants(name, city);
        this.state.name === "" ? this.setState({ name: null }) : this.setState({name: ""});
        this.state.city === "" ? this.setState({ city: null }) : this.setState({city: ""});
    }

    render() {
        return (
            <>
                <SearchBarComponent
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurantReducer.restaurants
    };
};

export default connect(mapStateToProps, { fetchRestaurants })(SearchBar);