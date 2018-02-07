import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="page-title">
          <h2>Wendte Designs Blog</h2>
        </div>
        <nav className="links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/blog/algorithms">Latest Post</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
