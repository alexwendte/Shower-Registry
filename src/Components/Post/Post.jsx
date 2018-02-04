import React, { Component } from 'react';
import PostAPI from './../Blog/Postapi.jsx';

class Post extends Component {
  render() {
   const post = PostAPI.get(parseInt(this.props.match.params.number, 10)
   )
   if(!post)
   {
      return <div>Sorry, the post was not found</div>
   }
    return (
      <div className="Post">
         <strong>{post.title}</strong> <br/> <br/> 
         {post.content}
      </div>
    );
  }
}

export default Post;
