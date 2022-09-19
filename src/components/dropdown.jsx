import React from 'react';

const Dropdown = () => {
    return (
        <>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Otros</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Comics</a>
                <a className="dropdown-item" href="#">Mangas</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">CD´s</a>
          </div>
        </li>   
        </>
    );
}

export default Dropdown;
