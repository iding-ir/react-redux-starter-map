import React from "react";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import MapContainer from "./MapContainer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LocationPicker from "./LocationPicker";
import { IState } from "../reducers";
import { Location } from "./Auth";

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

  const pickedLocation = useSelector(
    (state: IState) => state.location.picked
  ) as Location;
  const isSignedIn = useSelector(
    (state: IState) => state.auth.isSignedIn
  ) as boolean;

  return (
    <div className={classes.root}>
      <Sidebar />

      <Header />

      <MapContainer>
        <LocationPicker open={isSignedIn && !pickedLocation} />
      </MapContainer>
    </div>
  );
}
