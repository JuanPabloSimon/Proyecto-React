import React, {useState, useEffect} from 'react';
import ItemList from '../../itemList/itemList';
import prod from '../../../products';
import './itemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { 

        const promiseProducts = new Promise((resolve ,reject) =>{ 
            setTimeout(() => {
                resolve(prod)
            },2000)
        })
        promiseProducts
        .then((res) => {setProducts(res);
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(products);

    },);
  
    return (
        <div className='listCont'>
            <ItemList products={products}></ItemList>
        </div>
    );
};

export default ItemListContainer;
