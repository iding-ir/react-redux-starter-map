import React, { useContext } from "react";
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
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  const { state, setState } = useContext(StateContext);

  return (
    <div className={classes.root}>
      <Sidebar />

      <Header />

      <MapContainer />
    </div>
  );
}
