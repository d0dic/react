import {
  ActionCreatorWithPayload, createAction, createSlice, PayloadAction,
} from '@reduxjs/toolkit';

export interface Todo {
  id: number,
  content: string,
  dueDate?: number,
  created: number,
  for: string,
}

const name = 'todos';
const initialState: Todo[] = [];

const todosSlice = createSlice({
  name,
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => [...state, action.payload],
    remove: (state, action: PayloadAction<number>) => state.filter((_: Todo) => _.id !== action.payload),
  },
});

const { actions: genericActions } = todosSlice;

export const actions = {
  ...genericActions,
  delete: createAction(`${name}/delete`) as ActionCreatorWithPayload<number>,
};

export default todosSlice.reducer;
