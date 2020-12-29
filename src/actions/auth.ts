import { SIGN_IN, SIGN_OUT } from "../constants";
import { User } from "../components/Auth";

export interface IAction {
  type: string;
  payload: { user: User | null };
}

export const signIn = (user: User): IAction => {
  return {
    type: SIGN_IN,
    payload: { user },
  };
};

export const signOut = (): IAction => {
  return {
    type: SIGN_OUT,
    payload: { user: null },
  };
};
