import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Profile from '../pages/Profile';
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Categories from '../pages/Categories';
import SignUp from '../pages/SignUp';
import Login from '../pages/login';
//import SignUp from'../pages/SignUp.js'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/Categories' component={Categories}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/log-in' component={Login}/>

           
        </Switch>
    )
}

export default Routes
