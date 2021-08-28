import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import ComputerIcon from "@material-ui/icons/Computer";
import BuildIcon from "@material-ui/icons/Build";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import DescriptionIcon from "@material-ui/icons/Description";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-scroll";

const links = [
  { title: "about" },
  { title: "services" },
  { title: "projects" },
  { title: "contact" },
  {
    title: "resume",
    onClick: function () {
      window.open(
        "https://drive.google.com/file/d/1PIEC690iyPK4hPu85c4eDSsPWvFzH4c-/view?usp=sharing",
        "_blank"
      );
    },
  },
  { title: "cancel" },
];

const useStyles = makeStyles({
  list: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  fullList: {
    width: "100%",
    height: "100%",
  },
});

function SideNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const [pStyles, setpStyles] = useState({
    fontSize: "50px",
    textAlign: "center",
    textTransform: "capitalize",
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
      {links.map((text, index) => (
        <>
          <Link to={text.title} onClick={toggleDrawer(anchor, false)}>
            <div
              style={{
                // width: "100vw",
                dislay: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItem button key={text.title}>
                <ListItemIcon>
                  {index === 0 && <PersonIcon />}
                  {index === 1 && <ComputerIcon />}
                  {index === 2 && <BuildIcon />}
                  {index === 3 && <ContactMailIcon />}
                  {index === 4 && <DescriptionIcon />}
                  {index === 5 && <CloseRoundedIcon />}
                </ListItemIcon>
                <p className="pStyle" style={pStyles} onClick={text.onClick}>
                  {" "}
                  {text.title}{" "}
                </p>
              </ListItem>
            </div>
          </Link>
          <Divider />
        </>
      ))}
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
