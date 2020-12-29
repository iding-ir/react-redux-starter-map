import React, { useState, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { StateContext } from "./StateProvider";
import MapContainer from "./MapContainer";
import Header from "./Header";
import Sidebar from "./Sidebar";

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

  const { state, setState } = useContext(StateContext);

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Sidebar />

      <Header />

      <MapContainer />
    </div>
  );
}
