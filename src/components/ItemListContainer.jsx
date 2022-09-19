import React from 'react';
import "../App.css"

const ItemListContainer = ({productInfo}) => {
    return (
        <>
            <div className="hello">
                <div className="card mb-3 product">
                    <h3 className="card-header">{productInfo[0]}</h3>
                    <div className="card-body">
                    <h5 className="card-title">{productInfo[1]}</h5>
                    <h6 className="card-subtitle text-muted">{productInfo[2]}</h6>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                    <rect width="100%" height="100%" fill="#868e96" />
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Espacio Imagen</text>
                    </svg>
                    <div className="card-body">
                    <p className="card-text">{productInfo[3]}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">{productInfo[4]}</li>
                    <li className="list-group-item">{productInfo[5]}</li>
                    <li className="list-group-item">{productInfo[6]}</li>
                    </ul>
                    <div className="card-body">
                    
                    </div>
                    <div className="card-footer text-muted">
                        <button type="button" class="btn btn-primary">Añadir al Carrito</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default ItemListContainer;
