import React, { ReactElement, useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import useActions from '../../store/useActions';
import useSlice from '../../store/useSlice';

import { Todo } from '../../store/reducers/todos';

let interval: any;

function TodoList(): ReactElement {
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

  // for demo purposses
  useEffect(() => {
    if (todos.length < 3) {
      if (!interval) interval = setInterval(addTodo, 500);
      return;
    }

    if (interval) {
      clearInterval(interval);
    }
  }, [todos]);

  return (
    <div>
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
  );
}

export default TodoList;
