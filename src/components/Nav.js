import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const {itemsNumber} = props
    return (
        <header class='row'>
            <div class='col-md-4'>
                <Link to="/"><h1>Chris Bolas' Shop</h1></Link>
            </div>
            <div class='col-md-4'>

            </div>
            <div id='link-list' class='col-md-3'>
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
            </div>
            <div class='col-md-1'>
                <Link to="/cart">Cart: {itemsNumber}</Link>
            </div>
            
        </header>
    )
}

export default Nav