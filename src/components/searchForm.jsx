import React from 'react';

const SearchForm = ({searchBarInfo}) => {
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder={searchBarInfo[0]} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">{searchBarInfo[1]}</button>
            </form>
        </>
    );
}

export default SearchForm;
