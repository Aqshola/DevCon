import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";

const height = window.innerHeight;
const style = makeStyles((theme) => ({
  container: {
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: height - 200,
    },
  },
}));

const Spinner = ({ ...rest }) => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <CircularProgress {...rest} disableShrink />;
    </Container>
  );
};

export default Spinner;
