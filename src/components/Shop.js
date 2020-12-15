import React from 'react';
import Card from './Card'
// import ShopItems from './components/ShopItems'

const Shop = ({ setItems }) => {
    const addItem = ( item ) => {
        setItems(prevItems => prevItems.concat(item))
    }

    return (
        <div>
            <h2>My shop</h2>
            <Card 
                id='42'
                title='test'
                description='A test item for my shop.'
                photoUrl='https://images.unsplash.com/photo-1599598177991-ec67b5c37318'
                price='9.99'
                addItem={addItem}
            />
            <button onClick={() => addItem('a thing?')}>Add Item</button>
        </div>
    );
}

export default Shop;
