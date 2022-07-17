import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

const ItemList = ({products}) => {
  return (
      <div className="row row-cols-1 row-cols-md-3 g-4 ItemList">
          {
            products.map(product => <Item product={product} /> )
          }
      </div>
  );
};

export default ItemList;