import React from 'react';

const ProfileComponent = (props) => {

    const reviewMapper = (reviews) => {
        const reviewArray = reviews.map(review =>
            <div className="review-card">
                <p>{review.restaurant}</p>
                <p>{review.reviewText}</p>
            </div>
        );
        return reviewArray;
    };

    return (
        <>
            <div className="profile-div">
                <h1>Hello, { props.name }</h1>
                <h1>Reviews: { props.reviews.length }</h1>
                { props.reviews && reviewMapper(props.reviews) }
            </div>
        </>
    );
};

export default ProfileComponent;
