import React from react;
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Help from "@material-ui/icons/HelpOutline";
import MailIcon from "@material-ui/icons/Mail";

const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
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
              <Help />
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
    </Drawer>
  );
};

export default Sidebar;
