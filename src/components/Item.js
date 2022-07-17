import React from 'react';
import ItemCount from './ItemCount';
import '../styles/Item.css';

const Item = ({ product }) => {

    const { id, title, price , img, stock } = product;
    
    const onAdd = (qty) => {
        alert(`Has agregado ${qty} de productos`);
      };
  return (  
                <div className="card h-100 Item">
                    <img src={img} class="card-img-top Item--img " alt={title}></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <ItemCount stock={stock} onAdd={onAdd} initial={1} />
                    </div>
                </div>       
  );
};

export default Item;