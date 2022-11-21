import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <Link to="/greetings" exact="true">Greetings</Link>
    </div>
  );
}

export default Home;
