import React, { useState, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useTranslation } from "react-i18next";

import Auth from "./components/Auth";
import { StateContext } from "./components/StateProvider";
import MapContainer from "./components/MapContainer";

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

export default function ButtonAppBar() {
  const classes = useStyles();

  const { t } = useTranslation();

  const { state, setState } = useContext(StateContext);

  const [open, setOpen] = useState(false);

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => {
        setOpen(false);
      }}
      onKeyDown={() => {
        setOpen(false);
      }}
    >
      <List>
        <ListItem button key="about">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>

          <ListItemText primary={t("sidebar.about")} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key="contact">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>

          <ListItemText primary={t("sidebar.contact")} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {list}
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpen(true);
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

      <MapContainer />
    </div>
  );
}
