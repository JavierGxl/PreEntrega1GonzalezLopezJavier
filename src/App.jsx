import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const testProductInfo = ["Título", "Genero", "Subgenero", "Descripción", "Número de Páginas", "Edición", "Idioma"]
    return (
        <>
          <NavBar/>
          <ItemListContainer productInfo={testProductInfo}/>
        </>
    );
}

export default App;
