import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/firebase";
import Item from "./Item";
import ItemNotFound from "./itemNotFound";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getItem(id).then((prod) => {
      setItem(prod);
    });
  }, []);

  if (item.length != 0) {
    item[1];
    if (item[1] != undefined) {
      return (
        <div className="card mb-3">
          <Item item={item} />
        </div>
      );
    } else {
      return <ItemNotFound />;
    }
  }
};

export default ItemDetailContainer;