import React from 'react';
import CartItem from './CartItem'

const Cart = ({ items, setItems, total}) => {
    const updateItem = (id, count) => {
        setItems( (prevItems) => {
            let index = prevItems.findIndex( item => item.id === id)
            if (count) {
                let newItems = [...prevItems]
                newItems[index].count = count
                return newItems
            } else {
                // Remove Item from list
                return prevItems.slice(0, index).concat(prevItems.slice(index + 1))
            }
        })
    }

    const itemList = items.map( (item) => {
        return (
            <li><CartItem key={item.id} {...item} updateItem={updateItem} /></li>
        )
    })

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {itemList.length === 0 ? <p>Nothing to see here.</p> : itemList}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
