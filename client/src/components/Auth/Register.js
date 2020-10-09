import {
  Container,
  FormControl,
  TextField,
  Typography,
  Box,
  makeStyles,
  Paper,
  Button,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const height = window.innerHeight;
const style = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    height: height,
    alignItems: "center",
    flexBasis: "auto",
  },
  paper: {
    width: "300px",
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
    "& h3": {
      textAlign: "center",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  inputSpace: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  btnGrp: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
}));

export default function Login(params) {
  console.log(height);

  const classes = style();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">Sign Up</Typography>
        <FormControl className={classes.form}>
          <TextField variant="outlined" label="Email" />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="Name"
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="password"
            type="password"
          />
        </FormControl>
        <Box className={classes.btnGrp}>
          <Button style={{ width: "100%" }} variant="contained" color="primary">
            Sign Up
          </Button>
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
