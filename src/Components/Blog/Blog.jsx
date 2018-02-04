import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Post from '../Post/Post.jsx'
import './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
         <h1>THIS IS MY BLOG POST</h1>
         <ul> Click on any Post to check it out!
           <li> <a href="/blog/1">First </a></li>
           <li> <a href="/blog/2">Second</a></li>
         </ul>
         <Switch>
            <Route path='/blog/:number' component={Post}/>
         </Switch>
      </div>
    );
  }
}

export default Blog;