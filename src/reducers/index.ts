import { combineReducers } from "redux";

import authReducer, { IStateAuth } from "./auth";

export interface IState {
  auth: IStateAuth;
}

const combinedReducers = combineReducers({
  auth: authReducer,
});

export default combinedReducers;
