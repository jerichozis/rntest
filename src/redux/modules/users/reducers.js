import { handleActions } from "redux-actions";
import { setUsers, selectUser } from "./actions";

const defaultState = {
  users: [],
  selectedUser: null,
  nextPage: 1
};

export default handleActions(
  {
    [setUsers]: (state, { payload }) => ({
      ...state,
      users: [...state.users, ...payload.users],
      nextPage: state.nextPage + 1
    }),
    [selectUser]: (state, { payload }) => {
      return {
        ...state,
        selectedUser: payload.user
      };
    }
  },
  defaultState
);
