import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares = applyMiddleware(thunk);

const store = createStore(contactsReducer, composeWithDevTools(middlewares));

export default store;
