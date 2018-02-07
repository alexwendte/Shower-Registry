import React, { Component } from 'react';
import PostAPI from './../Blog/Postapi.jsx';

class Post extends Component {
  render() {
   const post = PostAPI.get(this.props.match.params.url)
   if(!post)
   {
      return <div>Sorry, the post was not found</div>
   }
    return (
      <div className="Post">
         {post.content}
      </div>
    );
  }
}

export default Post;
