import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../App.css";
import CategoryContainer from "./CategoryContainer";
import { getProductFile } from "../utils/functions";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const { idCategory } = useParams();
  console.log("Esta es la id");
  console.log(idCategory);
  useEffect(() => {
    getProductFile("../json/products.json").then((items) => {
        const cardItem = items.map((item) => (
          <div
            className="card border-primary mb-3 itemCards"
            style={{ maxWidth: "20rem" }}
            key={item.id}
          >
            <div className="card-header">{item.Title}</div>
            <img
              src={`../img/${item.img}`}
              className="card-img-top"
              alt={item.Title}
            />
            <div className="card-body">
              <h4 className="card-title">${item.Price}</h4>
              <p className="card-text">{item.Desc}</p>
              <button className="btn btn-dark">
                <Link className="nav-link" to={`/item/${item.id}`}>
                  Ver Producto
                </Link>
              </button>
            </div>
          </div>
        ));

        setItems(cardItem);
      }),
      [];
  },[]);
  useEffect(() => {
    getProductFile("../json/products.json").then((category) => {
        const category1 = category.filter(categoryArray => categoryArray.idCategory == idCategory)
        setCategory(category1)
        console.log(category1)
        console.log(category)
        console.log("hola")
    }),
    []},[])
    console.log(category)
if (idCategory===undefined){
  return <div className="row">{items}</div>;
}    
 if(idCategory!=undefined)
     return (
            <div className="card mb-3">
                <CategoryContainer category={category}/>
                console.log(category)
            </div>
    );

};
export default ItemListContainer;
