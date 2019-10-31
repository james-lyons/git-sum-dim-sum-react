import React from 'react';
import './Home.css';
import SearchBar from '../SearchContainer/SearchBar';
import Restaurants from '../RestaurantsContainer/Restaurants';

class Home extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <SearchBar />
                <Restaurants />
            </>
        );
    };
};

export default Home;