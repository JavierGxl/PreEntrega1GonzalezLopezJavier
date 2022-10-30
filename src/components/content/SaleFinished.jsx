import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { CartContext } from "../../Context/CartContext";

const SaleFinished = ({ orderIdDisplay }) => {
  const { cart, emptyCart } = useContext(CartContext);

  return (
    <div className="saleFinishedBG">
      <div className="row saleFinished">
        <h2>Muchas gracias por comprar en Lectundia.</h2>
        <h3>Su ID de compra es:</h3>
        <h2>{orderIdDisplay}</h2>
        <Link className="nav-link active" to="/" onClick={() => emptyCart()}>
          <button className="btn btn-dark">Aceptar</button>
        </Link>
      </div>
    </div>
  );
};

export default SaleFinished;