import React from 'react';
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Otros</Link>
            <div className="dropdown-menu">
                <Link className="dropdown-item" to="/category/3">Comics</Link>
                <Link className="dropdown-item" to="/category/4">Mangas</Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/category/5">CD´s</Link>
          </div>
        </li>   
        </>
    );
}

export default Dropdown;
