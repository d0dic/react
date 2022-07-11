import React, { ReactElement } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import Activity from '../components/Activity';

import { Todo } from '../store/reducers/todos';
import useActions from '../store/useActions';
import useSlice from '../store/useSlice';

export type ActivityEvent = {
  type?: 'todo/added' | 'todo/removed' | 'note',
  content?: string,
  created: Date,
}

function Todos(): ReactElement {
  const { todos } = useSlice();
  const actions = useActions();

  const addTodo = () => {
    const now = Date.now();
    const content = loremIpsum();

    actions.todos.add({
      id: now, for: 'Me', created: now, dueDate: now + 10e3, content,
    } as Todo);
  };

  const removeTodo = (id: number) => () => {
    actions.todos.delete(id);
  };

  // TODO: Setup translations
  return (
    <div>
      <h1>Todos page</h1>
      <hr />

      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 9 }}>
          {todos.length > 0
            ? todos.map((_: Todo) => (
              <div style={{ display: 'flex', alignItems: 'center' }} key={_.id}>
                {/* TODO: Log activity on action checked */}
                <input type="checkbox" name={_.content} id={_.id.toString()} />
                <p style={{ marginLeft: 15 }}>{_.content}</p>
                <button onClick={removeTodo(_.id)} style={{ marginLeft: 'auto', marginRight: 15 }} type="button">
                  x
                </button>
              </div>
            ))
            : <p>No todos at the moment...</p>}
          <button type="button" onClick={addTodo}>Add Todo</button>
        </div>
        <div style={{ flex: 3, borderLeft: '1px solid', paddingLeft: 15 }}>
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default Todos;
