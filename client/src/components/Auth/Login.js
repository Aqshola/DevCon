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
    justifyContent: "space-between",
    height: "370px",
    "& h3": {
      textAlign: "center",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "130px",
  },
  inputSpace: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  btnGrp: {
    display: "flex",
    flexDirection: "column",
    height: "70px",
    justifyContent: "space-between",
  },
}));

export default function Login(params) {
  console.log(height);

  const classes = style();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">Login</Typography>
        <FormControl className={classes.form}>
          <TextField variant="outlined" label="Email" />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="password"
            type="password"
          />
        </FormControl>
        <Box className={classes.btnGrp}>
          <Button
            style={{ width: "100%" }}
            size="large"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Link component={RouterLink} to="/register">
            Register
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
