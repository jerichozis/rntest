import { createAction } from "redux-actions";

export const fetchUsers = createAction("users/FETCH_USERS");

export const setUsers = createAction("users/SET_USERS");

export const selectUser = createAction("users/SELECT_USER");
