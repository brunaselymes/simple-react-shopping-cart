import React from "react";

export default function Cart(props) {
    const { cartItems, addToCart, removeFromCart } = props;
    return (
        <aside className="block col-1">
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.length === 0 && <div>Your cart is empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => removeFromCart(item)} className="remove">
                            ❌
                        </button>{' '}
                        <button onClick={() => addToCart(item)} className="add">
                            ➕
                        </button>
                    </div>

                    <div className="col-2 text-right">
                        {item.qtt} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
        </aside>);
}
