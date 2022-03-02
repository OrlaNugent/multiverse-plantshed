import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
        <img className="products" src={product.image} alt={product.name}></img>
        <h3 className="productInfo">{product.name}</h3>
        <div className="productInfo">£{product.price}</div>
        <div>
            <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    </div>
  );
}
