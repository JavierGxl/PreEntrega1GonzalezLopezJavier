import React from "react";
import "./itemListContainerCSS.css";

const ItemNotFound = () => {
  return (
    <div>
      <h2>Item Not Found</h2>
      <p>
        El producto que usted está buscando no existe en nuestra base de datos.
        Por favor, elija un producto valido o explore nuestras categorías para
        encontrar lo que busca.
      </p>
    </div>
  );
};

export default ItemNotFound;