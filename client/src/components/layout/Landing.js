import {
  Typography,
  makeStyles,
  Box,
  Button,
  Container,
} from "@material-ui/core";

import React from "react";

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
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  btn: {
    width: "100px",
    boxShadow: "none",
  },
}));
export default function Landing(props, {}) {
  const classes = style();
  return (
    <Container className={classes.container}>
      <Box className={classes.titleBox}>
        <Typography variant="h1">DevCon</Typography>
        <Typography variant="h6">Developing Connection</Typography>
        <Box className={classes.btnBox}>
          <Button
            onClick={() => props.history.push("/register")}
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Button
            onClick={() => props.history.push("/login")}
            variant="contained"
            className={classes.btn}
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
}
