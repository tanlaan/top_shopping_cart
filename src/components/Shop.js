import React from 'react';
import Card from './Card'
import ShopItems from './ShopItems'

const Shop = ({ setItems }) => {
    const addItem = ( item ) => {
        setItems(prevItems => {
            let index = prevItems.findIndex(listItem => listItem.id === item.id)
            if (index !== -1) {
                // Add count to current cart count
                let newItems = [...prevItems]
                newItems[index].count += item.count
                return newItems
            }
            // Item not in cart already, add them
            return prevItems.concat(item)
        })
    }

    const cardList = ShopItems.map( (item) => {
        return (
            <Card
                id={item.id}
                title={item.title}
                description={item.description}
                photoUrl={item.photoUrl}
                price={item.price}
                addItem={addItem}
            />
        )
    })

    return (
        <div>
            <h2>My shop</h2>
            <div id="shop-card-list" >
                { cardList }
            </div>
        </div>
    );
}

export default Shop;
