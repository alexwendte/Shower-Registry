import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landing-screen">
          <div className="headers">
            <h1>This Brianna's and my shower Registry!</h1> Test 2
            <h2>View My <Link to="/blog/algorithms">Most Recent Post</Link></h2>
          </div>
        </div>
        <section>
          <p>
            Check out my <Link to="/blog/">Blog!</Link>
          </p>
          <p>
            <Link to="/babe">Here is a fun link!</Link>
          </p>
          
        </section>
      </div>
    );
  }
}

export default Home;
