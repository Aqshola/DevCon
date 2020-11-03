import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { register } from "../../action/auth";
import PropTypes from "prop-types";
import { Link as RouterLink, Redirect } from "react-router-dom";
import AlertCom from "../layout/Alert";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Visibility } from "@material-ui/icons";
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
  InputAdornment,
  IconButton,
} from "@material-ui/core";

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

const Register = ({ isAuthenticated, setAlert, register }) => {
  const classes = style();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [show, setshow] = useState(false);

  const { name, email, password, password2 } = formData;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password do not match", "error");
    } else {
      register({ name, email, password });
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
            value={email}
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="password"
            name="password"
            value={password}
            onChange={onChange}
            type={show ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setshow(!show)}>
                    {show ? <Visibility /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.inputSpace}
            variant="outlined"
            label="Confrim password"
            name="password2"
            value={password2}
            type={show ? "text" : "password"}
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
      <AlertCom />
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
