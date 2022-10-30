import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (prod, cant) => {
    const aux = cart;
    let indice = aux.findIndex((item) => item.id == prod[0]);

    if (indice != -1) {
      aux[indice].cantidad = cant;
    } else {
      const id = prod[0];
      const x = prod[1];
      const itemCart = { id, ...x, cantidad: cant };
      aux.push(itemCart);
    }
    setCart(structuredClone(aux));
    console.log(cart);
  };

  const removeItem = (prod) => {
    const aux = cart;
    let indice = aux.findIndex((item) => item.id == prod[0]);

    aux.splice(indice, 1);
    setCart(structuredClone(aux));
    console.log(cart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export { CartContext, CartProvider };