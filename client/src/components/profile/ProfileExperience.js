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

export const ProfileExperience = ({ experience }) => {
  const classes = style();
  return (
    <>
      {experience.length === 0 || experience === undefined ? (
        <></>
      ) : (
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h6">Experience</Typography>
          {experience.map((exp) => (
            <>
              <Box marginY="10px" key={exp._id}>
                <Typography variant="subtitle1" gutterBottom>
                  <b>{exp.title}</b>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Moment format="MMM YYYY">{exp.from}</Moment> -{" "}
                  {!exp.current && exp.to !== null ? (
                    <Moment format="MMM YYYY">{exp.to}</Moment>
                  ) : (
                    "Current"
                  )}
                </Typography>
                <Typography variant="subtitle2">{exp.description}</Typography>
              </Box>
              <Divider />
            </>
          ))}
        </Paper>
      )}
    </>
  );
};
