import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, makeStyles } from "@material-ui/core";

const height = window.innerHeight;
const style = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height - 300,
  },
  load: {
    position: "absolute",
  },
}));

const Spinner = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <CircularProgress className={classes.load} disableShrink />;
    </Container>
  );
};

export default Spinner;
