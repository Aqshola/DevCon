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
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as routeLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/auth";
import { getPosts } from "../../action/post";
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
  menu: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
  },
}));

const Nav = ({ auth: { isAuthenticated, loading }, logout, getPosts }) => {
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
  const list = () => {
    return (
      <Box
        flexDirection="column"
        justifyContent="space-between"
        height="200px"
        width="150px"
      >
        <Button component={routeLink} to="/profiles" color="inherit" fullWidth>
          Developer
        </Button>
        {!loading && (
          <>
            {isAuthenticated ? (
              <AuthLink divClass={classes.menu} />
            ) : (
              <GuestLink divClass={classes.menu} />
            )}
          </>
        )}
      </Box>
    );
  };

  const GuestLink = ({ classes, divClass }) => {
    return (
      <div className={divClass}>
        <Button
          component={routeLink}
          to="/login"
          className={classes}
          color="inherit"
        >
          Login
        </Button>
        <Button
          component={routeLink}
          to="/register"
          className={classes}
          color="inherit"
        >
          Register
        </Button>
      </div>
    );
  };

  const AuthLink = ({ classes, divClass }) => {
    return (
      <div className={divClass}>
        <Button
          component={routeLink}
          to="/dashboard"
          className={classes}
          color="inherit"
        >
          Dashboard
        </Button>
        <Button
          component={routeLink}
          to="/login"
          className={classes}
          color="inherit"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    );
  };

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              component={routeLink}
              to={isAuthenticated ? "/posts" : "/"}
              underline="none"
              onClick={
                isAuthenticated
                  ? () => {
                      getPosts();
                      document.documentElement.scrollTop = 0;
                    }
                  : () => {}
              }
            >
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
          <Button
            className={classes.button}
            component={routeLink}
            to="/profiles"
            color="inherit"
          >
            Developer
          </Button>
          {!loading && (
            <>
              {isAuthenticated ? (
                <AuthLink classes={classes.button} />
              ) : (
                <GuestLink classes={classes.button} />
              )}
            </>
          )}
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, getPosts })(Nav);
