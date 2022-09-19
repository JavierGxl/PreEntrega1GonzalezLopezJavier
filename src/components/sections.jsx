import React from 'react';

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Ficción</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">No Ficción</a>
            </li>
        </>
    );
}

export default Sections;
