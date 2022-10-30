import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "../../App.css";

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const [localCart, setLocalCart] = useState([]);
  const [itemAmm, setItemAmm] = useState([]);
  let sum = 0;

  useEffect(() => {
    const showItem = cart.map((item) => (
      <div className="card cardProducto" key={item.id}>
        <img src={item.img} className="card-img-top" />
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text">Precio: {item.Price}</p>
        <p className="card-text">Cantidad: {item.cantidad}</p>
        <p className="card-text">Precio Total: {item.Price * item.cantidad}</p>
        <button className="btn btn-dark" onClick={() => removeItem(item)}>
          Eliminar
        </button>
      </div>
    ));
    console.log(itemAmm);
    setLocalCart(showItem);
    console.log(localCart);
  }, [cart]);

  useEffect(() => {
    const getItemAmm = cart.map((item) => item.cantidad);
    const getFinalAmm = getItemAmm.reduce(function (sum, i) {
      return sum + i;
    });
    setItemAmm(getFinalAmm);
  }, [cart]);

  const app =
    cart.length != 0 ? (
      <div className="row">
        {" "}
        {localCart}{" "}
        <div className="flexFinal">
          <h3>Productos totales: {itemAmm}</h3>
          <Link className="nav-link active" to="/finishSale">
            <button className="btn btn-dark">Finalizar Compra</button>
          </Link>{" "}
        </div>
      </div>
    ) : (
      <div>
        {" "}
        <h1>No existen elementos en el carrito</h1>
        <Link className="nav-link active" to="/">
          <button className="btn btn-dark">Ir al Home</button>
        </Link>
      </div>
    );

  return app;
};

export default Cart;
