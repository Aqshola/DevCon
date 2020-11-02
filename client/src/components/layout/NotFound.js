import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

const height = window.innerHeight;

const style = makeStyles((theme) => ({
  container: {
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    width: "600px",
    transition: "0.5s",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  img: {
    display: "flex",
    width: "100%",
  },
}));
const NotFound = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <img
          alt="not found"
          className={classes.img}
          src={require("./img/notFound.svg")}
        />
      </Box>
    </Container>
  );
};

export default NotFound;
