// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

//LOOK INTO WHAT THAT WOULD BE!!!!
//import React from "react";
import React from 'react';
import First from "./PostArchive/First";
import Second from "./PostArchive/Second";
import Third from "./PostArchive/Third";
const PostAPI = {

   posts: [
      {
        url: "first-ever-post",
        title: "First Ever Blog Post!",
        content: <First />
      },
      {
        url: "algorithms",
        title: "Algorithms, Oh My!",
        content: <Second />
      },
      {
        url: "third",
        title: "Algorithms, Oh My!",
        content: <Third />
      }
    ],
    all: function() { return this.posts},
    get: function(id) {
      const isPost = p => p.url === id
      return this.posts.find(isPost)
    }
  }
 
 export default PostAPI
 