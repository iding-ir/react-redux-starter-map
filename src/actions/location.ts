import { LOCATION_SET_CURRENT, LOCATION_SET_PICKED } from "../constants";
import { Location } from "../components/Auth";

export interface IAction {
  type: string;
  payload: { location: Location | null };
}

export const setCurrentLocation = (location: Location): IAction => {
  return {
    type: LOCATION_SET_CURRENT,
    payload: { location },
  };
};

export const setPickedLocation = (location: Location): IAction => {
  return {
    type: LOCATION_SET_PICKED,
    payload: { location },
  };
};
