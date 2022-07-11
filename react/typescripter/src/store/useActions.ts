import { useDispatch } from 'react-redux';
import { Action, ActionCreator } from '@reduxjs/toolkit';

import { actions as todoActions } from './reducers/todos';

function useActions() {
  const dispatch = useDispatch();

  const dispatchable = (action: ActionCreator<Action>) => (payload: any) => dispatch(action(payload));

  const todos = {
    add: dispatchable(todoActions.add),
    delete: dispatchable(todoActions.delete),
    // remove: dispatchable(todoActions.remove),
  };

  return {
    todos,
  };
}

export default useActions;
