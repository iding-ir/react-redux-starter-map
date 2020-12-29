import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

import Auth from "./Auth";
import { IState } from "../reducers";
import { openSidebar } from "../actions/sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  })
);

const Header = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const open = useSelector((state: IState) => state.sidebar.open) as boolean;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => {
            dispatch(openSidebar());
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          {t("header.title")}
        </Typography>

        <Auth />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
