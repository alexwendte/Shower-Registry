import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landing-screen">
          <div className="headers">
            <h1>Welcome to the Wendte Digital Designs Blog!</h1>
            <h2>View My <a href="/blog/algorithms">Most Recent Post</a></h2>
          </div>
        </div>
        <section>
          <p>
            Check out my <a href="/blog">Blog!</a>
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
