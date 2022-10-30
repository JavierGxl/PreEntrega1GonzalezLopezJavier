import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../App.css";
import CategoryContainer from "./CategoryContainer";
import { getItems } from "../utils/firebase";

const Category = () => {
  const [category, setCategory] = useState([]);
  const { idCategory } = useParams();
  useEffect(() => {
    getItems().then((category) => {
      const category1 = category.filter(
        (categoryArray) => categoryArray[1].idCategory == idCategory
      );
      setCategory(category1);
    }),
      [];
  }, [category]);

  return (
    <div className="card mb-3">
      <CategoryContainer category={category} />
    </div>
  );
};

export default Category;
