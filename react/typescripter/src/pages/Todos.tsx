import React, { ReactElement } from 'react';

import Activity from '../components/Activity';

import TodoList from '../components/TodoList';

function Todos(): ReactElement {
  return (
    <div>
      <h1>Todos page</h1>
      <hr />

      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 9 }}>
          <TodoList />
        </div>
        <div style={{ flex: 3, borderLeft: '1px solid', paddingLeft: 15 }}>
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default Todos;
