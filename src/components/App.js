import React from 'react'
import ProductList from './ProductList'
import ProductScreen from '../screens/ProductScreen'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route exact path="/product/:id" component={ProductScreen}/>
                </Switch>
            </main>
        </Router>
        
    )
}

export default App;
