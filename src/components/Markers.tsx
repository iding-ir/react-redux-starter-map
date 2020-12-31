import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { StateContext } from "./StateProvider";
import { IState } from "../reducers";
import { Location } from "./Auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    marker: {
      width: "50px",
      height: "50px",
      transform: "translate(-50%, -100%)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% ",
      backgroundImage: "url('../assets/images/icon-marker.png')",
      zIndex: 999,
    },
  })
);

interface Props {}

const Markers = (props: Props) => {
  const classes = useStyles();

  const { state, setState } = useContext(StateContext);

  const { map, markers } = state;

  const pickedLocation = useSelector(
    (state: IState) => state.location.picked
  ) as Location;

  const isSignedIn = useSelector(
    (state: IState) => state.auth.isSignedIn
  ) as boolean;

  useEffect(() => {
    if ((markers?.picked && !isSignedIn) || markers?.picked) {
      markers.picked.remove();

      setState({ ...state, markers: { ...markers, picked: null } });
    }

    if (pickedLocation && isSignedIn) {
      const marker = document.createElement("div");
      marker.className = classes.marker;

      new mapboxgl.Marker(marker, {
        anchor: "bottom",
      })
        .setLngLat(pickedLocation)
        .addTo(map);

      setState({ ...state, markers: { ...markers, picked: marker } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickedLocation, isSignedIn]);

  return <div></div>;
};

export default Markers;
