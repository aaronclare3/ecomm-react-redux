import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import ProductScreen from '../screens/ProductScreen'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';


const App = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/product/:id" component={ProductScreen}/>
                    <Route exact path="/cart" component={CartScreen}/>
                </Switch>
            </main>
        </Router>
        
    )
}

export default App;
