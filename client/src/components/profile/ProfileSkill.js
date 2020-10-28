import React from "react";
import { Chip, makeStyles, Paper, Box, Typography } from "@material-ui/core";
const style = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px",
  },
  skillset: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export const ProfileSkill = ({ skills }) => {
  const classes = style();
  return (
    <>
      {skills.length === 0 || skills === undefined ? (
        <></>
      ) : (
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h6">Skills</Typography>
          <Box marginY="10px" className={classes.skillset}>
            {skills.map((skill, i) => (
              <Chip label={skill} color="primary" key={i} />
            ))}
          </Box>
        </Paper>
      )}
    </>
  );
};
