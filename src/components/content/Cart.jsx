import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../Context/CartContext';

const Cart = () => {
    const {cart, addItem, removeItem} = useContext(CartContext)
    const [localCart, setLocalCart] = useState([]);

    useEffect(() => {
        const showItem  = cart.map(item => 
            <div className="card cardProducto" key={item.id}>
                    <img src={item.img} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">Precio: {item.precio}</p>
                            <p className="card-text">Cantidad: {item.cantidad}</p>
                            <p className="card-text">Precio Total: {item.precio * item.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => removeItem(item)}>Eliminar</button>
                    </div>
                </div>)
        setLocalCart(showItem)
    }, [cart]);
    
   const app = (cart.length != 0) ? <div className='row'> {localCart} </div> : <> <h1>No existen elementos en el carrito <button className='btn btn-dark'>Ir al Home</button></h1></>
          
    return app
}

export default Cart;