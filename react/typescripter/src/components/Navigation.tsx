import React from 'react';
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
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todos">Todos</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
}

export default Navigation;
