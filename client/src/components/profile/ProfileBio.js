import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const style = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px",
  },
}));

export const ProfileBio = ({ bio }) => {
  const classes = style();
  return (
    <>
      {bio === null || bio === undefined || bio === " " ? (
        <></>
      ) : (
        <Paper className={classes.paper} elevation={1} variant="outlined">
          <Typography variant="h6">Bio</Typography>
          <Typography variant="body1">{bio}</Typography>
        </Paper>
      )}
    </>
  );
};
