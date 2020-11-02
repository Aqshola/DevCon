import React, { useState } from "react";
import { setAlert } from "../../action/alert";
import { login } from "../../action/auth";
import { connect } from "react-redux";
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

const Login = ({ isAuthenticated, login, setAlert }) => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [show, setshow] = useState(false);

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    const { email, password } = data;
    e.preventDefault();
    login(email, password);
  };
  const classes = style();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3">Login</Typography>
        <FormControl className={classes.form}>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            onChange={onChange}
          />
          <TextField
            className={classes.inputSpace}
            name="password"
            variant="outlined"
            label="password"
            type={show ? "text" : "password"}
            onChange={onChange}
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
        </FormControl>
        <Box className={classes.btnGrp}>
          <Button
            style={{ width: "100%" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Login
          </Button>
          <Link component={RouterLink} to="/register">
            Register
          </Link>
        </Box>
      </Paper>
      <AlertCom />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
