import React from 'react';

import Welcome from '../components/Welcome';

function Home(): React.ReactElement {
  return (
    <div>
      <h1>Home page</h1>
      <hr />

      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, nisi.
        Magnam maiores et ducimus cupiditate, debitis aperiam dolor quibusdam sunt praesentium veritatis,
        voluptate adipisci iste sapiente tenetur ab aut corporis?
      </p>
      <div>
        <Welcome />
      </div>
    </div>
  );
}

export default Home;
