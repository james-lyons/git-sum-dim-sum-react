import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { fetchUser } from '../../actions/authActions';

class Profile extends React.Component {
    state = {
        name: null,
        email: null,
        reviews: null,
        reviewText: null,
        edit_review_display: "none"
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        console.log(currentUser)
        this.props.fetchUser(currentUser)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    };

    editReviewDisplay = () => {
        this.state.edit_review_display === "none" ?
        this.setState({ edit_review_display: "" }) :
        this.setState({ edit_review_display: "none"});
    };

    render() {
        return (
            <>
                <ProfileComponent
                    name={ this.props.name }
                    email={ this.props.email }
                    reviews={ this.props.reviews }
                    reviewText={ this.state.reviewText }
                    edit_review_display={ this.state.edit_review_display }
                    handleChange={ this.handleChange }
                    editReviewDisplay={ this.editReviewDisplay }
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