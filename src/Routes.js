import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav      from './components/Nav'
import Home     from './components/Home'
import About    from './components/About'
import Contact  from './components/Contact'
import Shop     from './components/Shop'
import Cart     from './components/Cart'

const Routes = () => {
    const [itemNum, setItemNum] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    useEffect( () => {
        setItemNum(cartItems.length)
        setCartTotal( () => {
            return cartItems.reduce ( (total, item) => {
                return total += (item.price * item.count)
            }, 0)
        })
    }, [cartItems])

    return (
        <BrowserRouter>
            <Route>
                <Nav itemsNumber={itemNum} />
            </Route>
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/shop'>
                        <Shop setItems={setCartItems} />
                    </Route>
                    <Route path='/cart' >
                        <Cart 
                            items={cartItems} 
                            setItems={setCartItems} 
                            total={cartTotal}
                        />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default Routes