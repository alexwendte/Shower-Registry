import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BlogHome extends Component{
   render() {
      return (
         <div className="BlogHome">
				<h1>Welcome to My Blog!</h1>
            <nav className="links">
            	<ul> <h2>Click on any Post to check it out!</h2>
						<li> <Link to="/blog/first-ever-post">My First Ever Blog Post!</Link></li>
						<li> <Link to="/blog/algorithms">Algorithms Oh My!</Link></li>
               </ul>
            </nav>
         </div>
      )
   }
}

export default BlogHome;