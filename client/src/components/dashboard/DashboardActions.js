import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import BookIcon from "@material-ui/icons/Book";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const style = makeStyles((theme) => ({
  box: {
    width: "450px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      flexDirection: "column",
      height: "100px",
    },
  },
  btn: {
    width: "fit-content",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: "190px",
    },
  },
}));

export const DashboardActions = () => {
  const classes = style();
  return (
    <Box className={classes.box}>
      <Button
        className={classes.btn}
        size="small"
        disableElevation
        variant="outlined"
        color="primary"
        startIcon={<EditIcon />}
        component={Link}
        to="/edit-profile"
      >
        Edit Profile
      </Button>
      <Button
        className={classes.btn}
        size="small"
        disableElevation
        variant="outlined"
        color="primary"
        startIcon={<BusinessCenterIcon />}
        component={Link}
        to="/add-experience"
      >
        Add Experience
      </Button>
      <Button
        className={classes.btn}
        size="small"
        disableElevation
        variant="outlined"
        color="primary"
        startIcon={<BookIcon />}
        component={Link}
        to="/add-education"
      >
        Add Education
      </Button>
    </Box>
  );
};

export default DashboardActions;
