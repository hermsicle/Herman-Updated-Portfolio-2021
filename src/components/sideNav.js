import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import ComputerIcon from "@material-ui/icons/Computer";
import BuildIcon from "@material-ui/icons/Build";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-scroll";
const links = ["about", "services", "projects", "contact", "resume", "cancel"];

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});
function SideNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <Divider /> */}
      <List>
        {links.map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <PersonIcon />}
                {index === 1 && <ComputerIcon />}
                {index === 2 && <BuildIcon />}
                {index === 3 && <ContactMailIcon />}
                {index === 4 && <DescriptionIcon />}
                {index === 5 && <CloseRoundedIcon />}
              </ListItemIcon>
              <Link to={text}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <h1 onClick={toggleDrawer(anchor, true)}> {anchor} </h1> */}
          <div className="nav-menu" onClick={toggleDrawer(anchor, true)}>
            <div className="menu-button"> </div>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideNav;
