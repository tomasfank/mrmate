import React, {useState,useEffect} from 'react';
import ItemList from './ItemList'
import products from '../data/products.json';
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(loading);
        }, 2000);
      });

    useEffect(() =>{
        getProducts
            .then(res => setLoading(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    return (
        <div className="container-fluid mt-5 mb-5 ItemListContainer">
            {loading ? <p>Cargando...</p> : <ItemList products={products}/> }
        </div>
  );
};

export default ItemListContainer;