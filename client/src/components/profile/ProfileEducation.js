import { Box, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Moment from "react-moment";

const style = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px",
  },
}));

export const ProfileEducation = ({ education }) => {
  const classes = style();
  return (
    <>
      {education.length === 0 || education === undefined ? (
        <></>
      ) : (
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h6">Education</Typography>
          {education.map((edc) => (
            <>
              <Box marginY="10px" key={edc._id}>
                <Typography variant="subtitle1">
                  <b>{edc.school}</b>
                </Typography>
                <Typography variant="body1">{edc.degree}</Typography>
                <Typography variant="body2">
                  <Moment format="MMM YYYY">{edc.from}</Moment> -{" "}
                  {!edc.current ? (
                    <Moment format="MMM YYYY">{edc.to}</Moment>
                  ) : (
                    "Current"
                  )}
                </Typography>
                <Typography variant="subtitle2">{edc.description}</Typography>
              </Box>
              <Divider />
            </>
          ))}
        </Paper>
      )}
    </>
  );
};
