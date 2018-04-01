import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import BlogHome from './../BlogHome/BlogHome.jsx';
import Post from '../Post/Post.jsx'

class Blog extends Component {

  render() {
    return (
      <div>
         <Switch>
            <Route exact path='/blog/' component={ BlogHome }/>
            <Route path='/blog/:url' component={ Post }/>
         </Switch>
      </div>
    );
  }
}

export default Blog;