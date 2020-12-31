import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

import { signIn, signOut } from "../actions/auth";
import { registerUser } from "../actions/user";
import { IState } from "../reducers";
import getLocation from "../utils/getLocation";
import { SnackbarContext } from "./Snackbar/SnackbarProvider";

export interface Location {
  lnglat: {
    lng: number;
    lat: number;
  };
}
export interface User {
  name: string;
  email: string;
  lnglat: Location;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  })
);

interface Props {}

const Auth = (props: Props) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { snackbar, setSnackbar } = useContext(SnackbarContext);

  const user = useSelector((state: IState) => state.auth.user) as User;
  const isSignedIn = useSelector(
    (state: IState) => state.auth.isSignedIn
  ) as boolean;

  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    getLocation()
      .then((p: unknown) => {
        const position = p as GeolocationPosition;

        if ("profileObj" in response) {
          const name = response.profileObj.name as string;
          const email = response.profileObj.email as string;
          const lnglat = ({
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          } as unknown) as Location;

          const user = { name, email, lnglat };

          dispatch(signIn(user));

          dispatch(registerUser(user));

          setSnackbar({
            type: "success",
            message: "bbb",
          });
        }
      })
      .catch((error) => {
        dispatch(signOut());

        setSnackbar({
          type: "error",
          message: error,
        });

        throw error;
      });
  };

  const onFailure = (response: any) => {
    dispatch(signOut());

    setSnackbar({
      type: "error",
      message: "error",
    });
  };

  const onSignOut = (event: any) => {
    dispatch(signOut());
  };

  return isSignedIn ? (
    <div>
      <span className={classes.name}>{user.name}</span>

      <Button variant="contained" color="default" onClick={onSignOut}>
        {t("header.logout")}
      </Button>
    </div>
  ) : (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Auth;
