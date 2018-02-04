import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';

class Main extends Component {
   render() {
     return (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
  </main>
     )
   }
}

export default Main;