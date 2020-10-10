import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import { Link as routeLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link component={routeLink} to="/" underline="none">
            DevCon
          </Link>
        </Typography>
        <Button color="inherit">Developer</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
}
