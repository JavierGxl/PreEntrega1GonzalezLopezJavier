import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../App.css";
import { getItems } from "../utils/firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((items) => {
      const cardItem = items.map((item) => (
        <div
          className="card border-primary mb-3 itemCards"
          style={{ maxWidth: "20rem" }}
          key={item[0]}
        >
          <div className="card-header">{item[1].Title}</div>
          <img src={item[1].img} className="card-img-top" alt={item[1].Title} />
          <div className="card-body">
            <h4 className="card-title">${item[1].Price}</h4>
            <p className="card-text">{item[1].Desc}</p>
            <button className="btn btn-dark">
              <Link className="nav-link" to={`/item/${item[0]}`}>
                Ver Producto
              </Link>
            </button>
          </div>
        </div>
      ));
      setItems(cardItem);
    }),
      [];
  }, []);

  return <div className="row">{items}</div>;
};

export default ItemListContainer;