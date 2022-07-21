import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const listStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  listStyle: 'none',
  padding: 10,
};

function Navigation() {
  return (
    <ul style={listStyle}>
      <li>
        <Link to="/">
          <FormattedMessage
            id="homeLink"
            defaultMessage="Home"
            description="Home link"
          />
        </Link>
      </li>
      <li>
        <Link to="/todos">
          <FormattedMessage
            id="todosLink"
            defaultMessage="Todos"
            description="Todos link"
          />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FormattedMessage
            id="aboutLink"
            defaultMessage="About"
            description="About link"
          />
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
