import {
  Avatar,
  Box,
  Chip,
  IconButton,
  makeStyles,
  Paper,
  Typography,
  Link as Links,
} from "@material-ui/core";
import React from "react";
import Moment from "react-moment";

import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const style = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
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

export const ProfileTop = ({
  profile: {
    user: { avatar, name },
    status,
    company,
    location,
    bio,
    experience,
    education,
    skills,
    social,
    website,
  },
}) => {
  const classes = style();

  const Bio = () => {
    return (
      <>
        {bio === null || bio === undefined || bio === " " ? (
          <></>
        ) : (
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6">Bio</Typography>
            <Typography variant="body1">{bio}</Typography>
          </Paper>
        )}
      </>
    );
  };
  const Experiences = () => {
    return (
      <>
        {experience.length === 0 || experience === undefined ? (
          <></>
        ) : (
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6">Experience</Typography>
            {experience.map((exp) => (
              <Box marginY="10px" key={exp._id}>
                <Typography variant="subtitle1">{exp.title}</Typography>
                <Typography variant="body2">{exp.company}</Typography>
                <Typography variant="caption">
                  <Moment format="MMM YYYY">{exp.from}</Moment> -{" "}
                  {!exp.current ? (
                    <Moment format="MMM YYYY">{exp.to}</Moment>
                  ) : (
                    "Current"
                  )}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}
      </>
    );
  };
  const Educations = () => {
    return (
      <>
        {education.length === 0 || education === undefined ? (
          <></>
        ) : (
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6">Education</Typography>
            {education.map((edc) => (
              <Box marginY="10px" key={edc._id}>
                <Typography variant="subtitle1">{edc.school}</Typography>
                <Typography variant="body2">{edc.degree}</Typography>
                <Typography variant="caption">
                  <Moment format="MMM YYYY">{edc.from}</Moment> -{" "}
                  {!edc.current ? (
                    <Moment format="MMM YYYY">{edc.to}</Moment>
                  ) : (
                    "Current"
                  )}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}
      </>
    );
  };
  const Skills = () => {
    return (
      <>
        {skills.length === 0 || skills === undefined ? (
          <></>
        ) : (
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6">Skills</Typography>
            <Box marginY="10px" className={classes.skillset}>
              {skills.map((i, skill) => (
                <Chip label={skill} color="primary" key={i} />
              ))}
            </Box>
          </Paper>
        )}
      </>
    );
  };
  const Socials = () => {
    return (
      <Box display="flex">
        {website && website !== " " && (
          <IconButton
            component={Links}
            href={
              website.includes("https://") || website.includes("http://")
                ? website
                : `https://${website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon />
          </IconButton>
        )}
        {social && social.twitter && social.twitter !== " " && (
          <IconButton>
            <TwitterIcon
              component={Links}
              href={`${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          </IconButton>
        )}
        {social && social.facebook && social.facebook !== " " && (
          <IconButton
            component={Links}
            href={`${social.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
        )}
        {social && social.youtube && social.youtube !== " " && (
          <IconButton
            component={Links}
            href={`${social.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
        )}
        {social && social.instagram && social.instagram !== " " && (
          <IconButton
            component={Links}
            href={`${social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        )}
        {social && social.linkedin && social.linkedin !== " " && (
          <IconButton
            component={Links}
            href={`${social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        )}
      </Box>
    );
  };

  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="20px"
    >
      <Paper className={classes.paper} elevation={1}>
        <Avatar className={classes.large} src={avatar} />
        <Box marginTop="10px">
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{`${status} at ${company}`}</Typography>
          <Typography variant="body2">{location}</Typography>
          <Socials />
        </Box>
      </Paper>
      <Bio />
      <Experiences />
      <Educations />
      <Skills />
    </Box>
  );
};
