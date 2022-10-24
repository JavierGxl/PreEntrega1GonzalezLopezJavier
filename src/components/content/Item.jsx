import React, {useState, useContext} from 'react';
import "./itemListContainerCSS.css"
import {CartContext} from "../../Context/CartContext"



const Item = ({item}) => {
    const [cantidad, setCantidad] = useState(1);
    
    const {cart, addItem, removeItem} = useContext(CartContext)

    const cantItem = (operacion) => {
      if(operacion == "+") {
          if(cantidad < item.stock) {
            setCantidad(cantidad + 1)
          }   
      } else {
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
        }
    }
  }
    return (
        <>
            <div className="hello">
                <div className="card mb-3 product" width="100%">
                    <h3 className="card-header">{item.Title}</h3>
                    <div className="card-body">
                    <h5 className="card-title">{item.Genre}</h5>
                    <h6 className="card-subtitle text-muted">${item.Price}</h6>
                    </div>
                    <img width="100%" height={300} src={`../img/${item.img}`} alt="" />
                    <div className="card-body">
                    <p className="card-text">{item.Desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Publicado: {item.Year}</li>
                    <li className="list-group-item">Idioma: {item.Lang}</li>
                    <li className="list-group-item">Stock: {item.stock}</li>
                    </ul>
                    <div className="card-body">
                    
                    </div>
                    <button className='btn btn-dark' onClick={() => cantItem("+")}>+</button>
                    <h4 className='card-text centered'>{cantidad}</h4>
                    <button className='btn btn-dark' onClick={() => cantItem("-")}>-</button>
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-primary" onClick={addItem}>Añadir al Carrito</button>
                    </div>
                    
                    

                </div>
                
            </div>
        </>
    );
}

export default Item;