import React from 'react';
import Dropdown from './dropdown';
import SearchForm from './searchForm';
import Sections from './sections';
import CartWidget from './CartWidget';

const NavBar = () => {
    const searchBarText = ["Buscar en Lectulandia", "Buscar"]
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Lectulandia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                    <Sections/> 
                    <Dropdown/>
                    </ul>
                    <SearchForm searchBarInfo={searchBarText}/>
                    </div>
                    <CartWidget/>
                </div>
            </nav> 
        </>
    );
}

export default NavBar;
