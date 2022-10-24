import React from 'react';
import {Link} from 'react-router-dom'

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                    <span className="visually-hidden">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/1">Ficción</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/2">No Ficción</Link>
            </li>
        </>
    );
}

export default Sections;
