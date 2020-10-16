import {
  Typography,
  makeStyles,
  Box,
  Button,
  Container,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const style = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(10),
    "& h6": {
      fontWeight: "300",
      marginLeft: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      textAlign: "center",

      "& h1": {
        fontSize: "70px",
        marginLeft: "5px",
      },
    },
  },
  imgBox: {
    display: "flex",
    width: "600px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  img: {
    display: "flex",
    width: "100%",
  },
  titleBox: {
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
  },
  btnBox: {
    marginLeft: "5px",
    display: "flex",
    marginTop: "50px",
    columnGap: "20px",
    width: "230px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {},
  },
  btn: {
    width: "100px",
    boxShadow: "none",
  },
}));
const Landing = ({ isAuthenticated }) => {
  const classes = style();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.titleBox}>
        <Typography variant="h1">DevCon</Typography>
        <Typography variant="h6">Developing Connection</Typography>
        <Box className={classes.btnBox}>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            component={Link}
            to="/register"
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            className={classes.btn}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Box>

      <Box className={classes.imgBox}>
        <img
          className={classes.img}
          src={require("./img/Rectangle 3.svg")}
          alt="display img"
        />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
