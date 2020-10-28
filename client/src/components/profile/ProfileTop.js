import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Paper,
  Typography,
  Link as Links,
} from "@material-ui/core";
import React from "react";

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
}));

export const ProfileTop = ({
  profile: {
    user: { avatar, name },
    status,
    company,
    location,
    social,
    website,
  },
}) => {
  const classes = style();

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
    <Paper className={classes.paper} elevation={1}>
      <Avatar className={classes.large} src={avatar} />
      <Box marginTop="10px">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{`${status} at ${company}`}</Typography>
        <Typography variant="body2">{location}</Typography>
        <Socials />
      </Box>
    </Paper>
  );
};
