import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

import { signIn, signOut } from "../actions/auth";
import { registerUser } from "../actions/user";
import { IState } from "../reducers";
import getLocation from "../utils/getLocation";

export interface User {
  name: string | null;
  email: string | null;
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

  const user = useSelector((state: IState) => state.auth.user) as User;
  const isSignedIn = useSelector(
    (state: IState) => state.auth.isSignedIn
  ) as boolean;

  const onSuccess = (response: any) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const user = { name, email };

    dispatch(signIn(user));

    dispatch(registerUser(user));

    getLocation().then((position) => {
      console.log(position);
    });
  };

  const onFailure = (response: any) => {
    const name = null;
    const email = null;

    dispatch(signIn({ name, email }));
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
