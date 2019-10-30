import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { fetchUser } from '../../actions/authActions';

class Profile extends React.Component {
    state = {
        name: null,
        email: null,
        reviews: null
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        console.log(currentUser)
        this.props.fetchUser(currentUser)
    }

    render() {
        return (
            <>
                <ProfileComponent
                    name={this.props.name}
                    email={this.props.email}
                    reviews={this.props.reviews}
                />
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        name: state.authReducer.user.name,
        email: state.authReducer.user.email,
        reviews: state.authReducer.user.reviews
    };
};

export default connect(mapStateToProps, { fetchUser })(Profile);