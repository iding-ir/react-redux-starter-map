import { combineReducers } from "redux";

import authReducer, { IStateAuth } from "./auth";
import sidebarReducer, { IStateSidebar } from "./sidebar";

export interface IState {
  auth: IStateAuth;
  sidebar: IStateSidebar;
}

const combinedReducers = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

export default combinedReducers;
