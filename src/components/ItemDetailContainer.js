import React, {useState,useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import products from "../data/products.json"

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState(true);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(detail);
        }, 2000);
      });

    useEffect(() =>{
        getProducts
            .then(res => setDetail(res))
            .catch(err => console.log(err))
            .finally(() => setDetail(false));
    }, [])

    return (
        <div className="container-fluid mt-5 mb-5 ItemListContainer">
            {detail ? <p>Cargando...</p> : <ItemList products={products}/> }
        </div>
  );
};

export default ItemDetailContainer