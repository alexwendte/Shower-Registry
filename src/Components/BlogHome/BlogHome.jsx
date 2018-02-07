import React, {Component} from 'react';

class BlogHome extends Component{
   render() {
      return (
         <div className="BlogHome">
				<h1>Welcome to My Blog!</h1>
            <nav className="links">
            	<ul> <h2>Click on any Post to check it out!</h2>
						<li> <a href="/blog/first-ever-post">My First Ever Blog Post! </a></li>
						<li> <a href="/blog/algorithms">Algoriths, Oh My!</a></li>
               </ul>
            </nav>
         </div>
      )
   }
}

export default BlogHome;