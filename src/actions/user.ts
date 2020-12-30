import map from "../apis/map";
import { USER_REGISTER } from "../constants";
import { User } from "../components/Auth";

export const registerUser = (user: User) => async (dispatch: any) => {
  const response = await map.post("/wp/v2/speakers", user);

  dispatch({
    type: USER_REGISTER,
    payload: response.data,
  });
};
