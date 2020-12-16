import React, { useState } from 'react';

const Card = ({ id, title, description, photoUrl, price, addItem }) => {
    const [count, setCount] = useState(0)

    const addToCart = () => {
        if (count !== 0) {
            addItem({
                id,
                title,
                description,
                photoUrl,
                price: parseFloat(price),
                count: parseInt(count)
            })
            setCount(0)
        }
    }

    return (
        <div>
            <img src={photoUrl} alt={title} width='200px' />
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
            <label>
                <input 
                    type='number' 
                    name='count' 
                    min='0' 
                    max='99' 
                    value={count} 
                    onChange={e => setCount(e.target.value)}
                />
            </label>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Card;
