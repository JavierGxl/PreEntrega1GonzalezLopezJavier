import React, {useState, useEffect} from 'react';
import ItemDetailContainer from './ItemDetailContainer'
import { useParams } from 'react-router-dom';
import CategoryContainer from './CategoryContainer';

const Category = () => {
    const [category, setCategory] = useState([]);
    const {idCategory} = useParams()
    useEffect(() => {
        fetch("../json/products.json")
        .then(response => response.json())
        .then(category => {
            const category1 = category.filter(categoryArray => categoryArray.idCategory == idCategory)
            setCategory(category1)
            console.log(category1)
        })
       
   
    }, [])

    return (
        
            <div className="card mb-3">
                <CategoryContainer category={category}/>
            </div>
    );
}

export default Category;