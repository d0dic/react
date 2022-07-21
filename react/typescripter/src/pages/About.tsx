import React, { ReactElement, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

function About(): ReactElement | null {
  const [error, setError] = useState(false);

  const mockLoading = () => {
    setError(true);
  };

  useEffect(() => {
    setTimeout(mockLoading, 5000);
  }, []);

  // Testing error boundary
  if (error) throw new Error('Testing error boundary');

  return (
    <div>
      <h1>
        <FormattedMessage
          id="aboutTitle"
          defaultMessage="About"
          description="Test title"
        />
      </h1>
      <hr />

      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, nisi.
        Magnam maiores et ducimus cupiditate, debitis aperiam dolor quibusdam sunt
        praesentium veritatis, voluptate adipisci iste sapiente tenetur ab aut corporis?
      </p>
    </div>
  );
}

export default About;
