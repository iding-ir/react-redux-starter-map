import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import mapboxgl from "mapbox-gl";

import { StateContext } from "./StateProvider";
import { setPickedLocation } from "../actions/location";
import { IState } from "../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    trigger: {
      position: "absolute",
      right: "1rem",
      bottom: "2rem",
      width: "40px",
      height: "40px",
      backgroundColor: "#ffffff",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "80% ",
      backgroundImage: "url('../assets/images/icon-marker.png')",
      borderRadius: "50%",
      boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
      zIndex: 999,
      filter: "grayscale(100%)",
      "&.active": {
        cursor: "pointer",
        filter: "none",
      },
    },
    picker: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -100%)",
      width: "50px",
      height: "50px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% ",
      backgroundImage: "url('../assets/images/icon-marker.png')",
      cursor: "pointer",
      zIndex: 999,
    },
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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      minWidth: "500px",
      [theme.breakpoints.down("xs")]: {
        minWidth: "300px",
      },
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>

      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface Props {
  open: boolean;
}

const LocationPicker = (props: Props) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { state } = useContext(StateContext);

  const isSignedIn = useSelector(
    (state: IState) => state.auth.isSignedIn
  ) as boolean;

  const [open, setOpen] = React.useState<boolean>(false);
  const [picker, setPicker] = React.useState<boolean>(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);

    setPicker(true);
  };

  const getLocation = () => {
    const canter = state.map.getCenter();

    setPicker(false);

    dispatch(setPickedLocation(canter));

    const marker = document.createElement("div");
    marker.className = classes.marker;
    new mapboxgl.Marker(marker, {
      anchor: "bottom",
    })
      .setLngLat(canter)
      .addTo(state.map);
  };

  const enablePicker = () => {
    if (picker) {
      return;
    }

    setPicker(true);
  };

  const triggerClasses = clsx(classes.trigger, {
    active: !picker,
  });

  return (
    <div>
      {isSignedIn && <div className={triggerClasses} onClick={enablePicker} />}

      {picker && <div className={classes.picker} onClick={getLocation} />}

      <Dialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {t("locationPicker.title")}
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>{t("locationPicker.content")}</Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {t("locationPicker.button")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LocationPicker;
