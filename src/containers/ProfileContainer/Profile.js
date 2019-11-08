import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { fetchUser } from '../../actions/authActions';
import './Profile.css';

class Profile extends React.Component {
    state = {
        name: null,
        email: null,
        profile_image: null,
        reviews: null,
        reviewText: null,
        edit_review_display: "none"
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        this.props.fetchUser(currentUser);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    editReviewDisplay = () => {
        this.state.edit_review_display === "none" ?
        this.setState({ edit_review_display: "" }) :
        this.setState({ edit_review_display: "none"});
    };

    render() {
        return (
            <>
                <div id="profile-div">
                    <ProfileComponent
                        user={ this.props.user }
                        reviewText={ this.state.reviewText }
                        edit_review_display={ this.state.edit_review_display }
                        handleChange={ this.handleChange }
                        editReviewDisplay={ this.editReviewDisplay }
                    />
                </div>
            </>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    };
};

export default connect(mapStateToProps, { fetchUser })(Profile);