import React from "react";
import { useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

import Auth from "./Auth";
import { openSidebar } from "../actions/sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

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
