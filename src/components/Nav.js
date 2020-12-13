import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const {itemsNumber, setItemNum} = props
    const addItem = () => {
        setItemNum(itemsNumber + 1)
    }
    return (
        <header>
            <Link to="/"><h1>Chris Bolas' Shop</h1></Link>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Link to="/cart">Cart: {itemsNumber}</Link>
            <button onClick={addItem}>Increase Items</button>
            
        </header>
    )
}

export default Nav