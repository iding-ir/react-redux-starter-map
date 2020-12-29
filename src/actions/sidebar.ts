import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SIDEBAR_TOGGLE } from "../constants";

export interface IAction {
  type: string;
}

export const openSidebar = (): IAction => {
  return {
    type: SIDEBAR_OPEN,
  };
};

export const closeSidebar = (): IAction => {
  return {
    type: SIDEBAR_CLOSE,
  };
};

export const sidebarToggle = (): IAction => {
  return {
    type: SIDEBAR_TOGGLE,
  };
};
