import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Link,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link as routeLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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
  button: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => {
    return (
      <List>
        <ListItem>
          <Button color="inherit">Developer</Button>
        </ListItem>
        <ListItem>
          <Button component={routeLink} to="/login" color="inherit">
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button component={routeLink} to="/register" color="inherit">
            Register
          </Button>
        </ListItem>
      </List>
    );
  };
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={routeLink} to="/" underline="none">
              DevCon
            </Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
          <Button className={classes.button} color="inherit">
            Developer
          </Button>
          <Button
            component={routeLink}
            to="/login"
            className={classes.button}
            color="inherit"
          >
            Login
          </Button>
          <Button
            component={routeLink}
            to="/register"
            className={classes.button}
            color="inherit"
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
