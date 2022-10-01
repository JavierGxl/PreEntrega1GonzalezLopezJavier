import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/content/navBar';
import Carrito from './components/content/Cart';
import ItemDetailContainer from './components/content/ItemDetailContainer';
import Item from './components/content/Item';
import ItemListContainer from './components/layouts/ItemListContainer';
import Category from './components/content/Category';

const App = () => {
    return (
        <>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/Item/:id" element={<Item/>}/>
              <Route path="/Category/:idCategory" element={<Category/>}/>
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
