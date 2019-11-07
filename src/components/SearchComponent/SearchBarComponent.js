import React from 'react';
import './SearchBarComponent.css'

const SearchBarComponent = (props) => {
    return (
        <>
            <div className="s01">
                <form onSubmit={ props.handleSubmit }>
                    <div className="inner-form">
                        <div className="input-field first-wrap">
                            <input name="name" type="text" onChange={ props.handleChange } placeholder="Restaurant Name" />
                        </div>
                        <div className="input-field first-wrap">
                            <input name="city" type="text" onChange={ props.handleChange }  placeholder="City" />
                        </div>
                        <div className="input-field third-wrap">
                            <button className="btn-search" id="search-button" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBarComponent;