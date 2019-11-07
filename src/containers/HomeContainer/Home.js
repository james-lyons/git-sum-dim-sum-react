import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import SearchBar from '../SearchContainer/SearchBar';
import Restaurants from '../RestaurantsContainer/Restaurants';

class Home extends React.Component {
    state = {

    }

    render() {
        return (
            <>
                <div id="home-div">
                    <SearchBar />
                    <Restaurants history={ this.props.history }/>
                </div>
            </>
        );
    };
};

export default withRouter(Home);