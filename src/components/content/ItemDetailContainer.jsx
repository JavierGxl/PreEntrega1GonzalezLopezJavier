import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item'
import ItemNotFound from './itemNotFound'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/products.json")
        .then(response => response.json())
        .then(items => {
            const item1 = items.find(itemArray => itemArray.id == id)
            setItem(item1)
        })
        
   
    }, [])

   if (item==undefined){
    return(
        <ItemNotFound/>
    )
   }
    return (

            <div className="card mb-3">
                <Item item={item}/>
            </div>

    );
}

export default ItemDetailContainer;
