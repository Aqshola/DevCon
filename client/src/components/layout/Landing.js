import {
  Typography,
  makeStyles,
  Box,
  Button,
  Container,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";

let theme = createMuiTheme();
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
  },
  imgBox: {
    display: "flex",
    width: "600px",
  },
  img: {
    display: "flex",
    width: "100%",
  },
  titleBox: {
    alignSelf: "center",
  },
  btnBox: {
    marginLeft: "5px",
    display: "flex",
    marginTop: "50px",
    columnGap: "20px",
  },
  btn: {
    width: "100px",
    boxShadow: "none",
  },
}));
export default function Landing(params) {
  const classes = style();
  theme = responsiveFontSizes(theme);
  return (
    <Container className={classes.container}>
      <Box className={classes.titleBox}>
        <ThemeProvider theme={theme}>
          <Typography variant="h1">DevCon</Typography>
          <Typography variant="h6">Connect developer</Typography>
          <Box className={classes.btnBox}>
            <Button className={classes.btn} variant="contained" color="primary">
              Sign Up
            </Button>
            <Button variant="contained" className={classes.btn}>
              Login
            </Button>
          </Box>
        </ThemeProvider>
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
