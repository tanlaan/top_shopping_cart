import React from 'react';

const CartItem = ({ id, title, description, photoUrl, price, count, updateItem}) => {
    return (
        <div className="cart-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price} x {count}</p>
            <input 
                type='number'
                min='0'
                max='99'
                defaultValue={count}
            />
            <button onClick={(e) => updateItem(id, e.target.parentNode.getElementsByTagName('input')[0].value) }>Update</button>
            <button onClick={() => updateItem(id)}>Remove</button>
        </div>
    );
}

export default CartItem;
