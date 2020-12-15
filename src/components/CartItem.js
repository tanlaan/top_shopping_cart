import React from 'react';

const CartItem = ({ id, title, description, photoUrl, price, count, removeItem}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price} x {count}</p>
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    );
}

export default CartItem;
