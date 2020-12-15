import React from 'react';
import CartItem from './CartItem'

const Cart = ({ items, setItems}) => {
    const removeItem = (id) => {
        setItems( (prevItems) => {
            let index = prevItems.reduce( (found, item, index) => {
                if (item.id === id) {
                    return index
                } else {
                    return found
                }
            }, -1)

            if (index !== -1) {
                return prevItems.slice(0, index).concat(prevItems.slice(index + 1))
            }
        })
    }

    const itemList = items.map( (item) => {
        return (
            <li><CartItem key={item.id} {...item} removeItem={removeItem} /></li>
        )
    })

    return (
        <div>
            <h2>Shopping Cart</h2>
            {console.log(itemList)}
            {itemList.length === 0 ? <p>Nothing to see here.</p> : itemList}
        </div>
    );
}

export default Cart;
