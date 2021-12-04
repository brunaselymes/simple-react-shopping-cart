import React from 'react'

export default function Product(props) {
    const { product, addToCart } = props;
    return (
        <div>
            <h4 className="small">{product.image}</h4>
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <div>
                <button className="cart" onClick={() => addToCart(product)}>🛒</button>
            </div>
        </div>
    )
}