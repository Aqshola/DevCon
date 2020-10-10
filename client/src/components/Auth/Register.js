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
    height: "500px",
    "& h3": {
      textAlign: "center",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "300px",
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

export default function Register(props) {
  const classes = style();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Password do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">Sign Up</Typography>
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            required
            value={email}
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="Name"
            name="name"
            value={name}
            required
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="password"
            type="password"
            name="password"
            value={password}
            required
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="Confrim password"
            name="password2"
            type="password"
            value={password2}
            required
            onChange={onChange}
          />
        </FormControl>
        <Box className={classes.btnGrp}>
          <Button
            style={{ width: "100%" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
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
