import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="page-title">
          <h2>Wendte Designs Blog</h2>
        </div>
        <nav className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog/algorithms">Latest Blog</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
