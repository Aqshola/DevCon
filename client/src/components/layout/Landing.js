import { Typography, makeStyles, Box, Button } from "@material-ui/core";
import React from "react";

const style = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontSize: "30px",
      fontWeight: "300",
      marginLeft: "5px",
    },
    padding: theme.spacing(15),
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
    marginTop: "40px",
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
  return (
    <Box className={classes.container}>
      <Box className={classes.titleBox}>
        <Typography variant="h1">DevCon</Typography>
        <Typography>Connect developer</Typography>
        <Box className={classes.btnBox}>
          <Button className={classes.btn} variant="contained" color="primary">
            Sign Up
          </Button>
          <Button variant="contained" className={classes.btn}>
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
    </Box>
  );
}
