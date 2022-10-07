import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/content/navBar';
import Carrito from './components/content/Cart';
import ItemDetailContainer from './components/content/ItemDetailContainer';
import Item from './components/content/Item';
import ItemListContainer from './components/content/ItemListContainer';

const App = () => {
    return (
        <>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/Category/:idCategory" element={<ItemListContainer/>}/>
            </Routes>
          </BrowserRouter>
        </>
    );
}

export default App;
