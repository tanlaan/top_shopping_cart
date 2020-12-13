import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav      from './components/Nav'
import Home     from './components/Home'
import About    from './components/About'
import Contact  from './components/Contact'
import Shop     from './components/Shop'

const Routes = () => {
    const [itemNum, setItemNum] = useState(0)
    return (
        <BrowserRouter>
            <Route>
                <Nav itemsNumber={itemNum} setItemNum={setItemNum} />
            </Route>
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/shop' component={Shop} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default Routes