import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Detail from './container/Detail';
import './App.css';
// import HomeProps from './HomeProps'

const App = ()=>{
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home/:id" exact component={Detail} />
            </Switch>
        </div>
    )
}


export default App;