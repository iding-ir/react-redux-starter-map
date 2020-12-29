import notes from "../apis/map";
import { USER_REGISTER } from "../constants";
import { User } from "../components/Auth";

export const registerUser = (user: User) => async (dispatch: any) => {
  const response = await notes.post("/user", user);

  dispatch({
    type: USER_REGISTER,
    payload: response.data,
  });
};
