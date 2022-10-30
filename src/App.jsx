import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/content/navBar";
import Carrito from "./components/content/Cart";
import ItemDetailContainer from "./components/content/ItemDetailContainer";
import Item from "./components/content/Item";
import ItemListContainer from "./components/content/ItemListContainer";
import PageNotFound from "./components/content/pageNotFound";
import Cart from "./components/content/Cart";
import Category from "./components/content/Category";
import FinishSale from "./components/content/FinishSale";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route path="/Category/:idCategory" element={<Category />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Carrito" element={<Cart />} />
          <Route path="/finishSale" element={<FinishSale />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
