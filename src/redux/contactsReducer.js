import { Type } from "./actionsTypes";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

const contactsReducer = createReducer([], {
  [Type.GET_CONTACTS_SUCCESS]: (state, { payload }) => payload,
  [Type.POST_CONTACT_SUCCESS]: (state, { payload }) => [...state, payload],
  [Type.DELETE_CONTACT_SUCESS]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [Type.FILTER_CONTACT]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
