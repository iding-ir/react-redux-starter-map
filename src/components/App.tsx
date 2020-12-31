import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import MapContainer from "./MapContainer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LocationPicker from "./LocationPicker";
import Markers from "./Markers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />

      <Header />

      <MapContainer>
        <Markers />

        <LocationPicker />
      </MapContainer>
    </div>
  );
};

export default App;
