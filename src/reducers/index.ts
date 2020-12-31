import { combineReducers } from "redux";

import authReducer, { IStateAuth } from "./auth";
import sidebarReducer, { IStateSidebar } from "./sidebar";
import locationReducer, { IStateLocation } from "./location";

export interface IState {
  auth: IStateAuth;
  sidebar: IStateSidebar;
  location: IStateLocation;
}

const combinedReducers = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  location: locationReducer,
});

export default combinedReducers;
