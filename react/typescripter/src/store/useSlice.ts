import { useSelector } from 'react-redux';

import { RootState } from './config';

function useSlice() {
  const todos = useSelector((state: RootState) => state.todos);

  return {
    todos,
  };
}

export default useSlice;
