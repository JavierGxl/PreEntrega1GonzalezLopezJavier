import React, { useState, useContext } from "react";
import "./itemListContainerCSS.css";
import { CartContext } from "../../Context/CartContext";

const Item = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const { cart, addItem, removeItem } = useContext(CartContext);
  const cantItem = (operacion) => {
    if (operacion == "+") {
      if (cantidad < item[1].stock) {
        setCantidad(cantidad + 1);
        console.log(cantidad);
      }
    } else {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    }
  };
  return (
    <>
      <div className="itemDisplay">
        <div className="card mb-3 product" width="100%">
          <h3 className="card-header">{item[1].Title}</h3>
          <div className="card-body">
            <h5 className="card-title">{item[1].Genre}</h5>
            <h6 className="card-subtitle text-muted">${item[1].Price}</h6>
          </div>
          <img width="100%" height={300} src={item[1].img} alt="" />
          <div className="card-body">
            <p className="card-text">{item[1].Desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Publicado: {item[1].Year}</li>
            <li className="list-group-item">Idioma: {item[1].Lang}</li>
            <li className="list-group-item">Stock: {item[1].stock}</li>
          </ul>
          <div className="card-body"></div>
          <button className="btn btn-dark" onClick={() => cantItem("+")}>
            +
          </button>
          <h4 className="card-text centered">{cantidad}</h4>
          <button className="btn btn-dark" onClick={() => cantItem("-")}>
            -
          </button>
          <div className="card-footer text-muted">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addItem(item, cantidad)}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;