import {
  Link,
  List,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "../../action/profile";

const style = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginBottom: "10px",
  },
}));

const ProfileGithub = ({ username, repos, getGithubRepos }) => {
  const classes = style();
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  return (
    <>
      {username && repos.length > 0 && (
        <Paper className={classes.paper}>
          <Typography variant="h6">Repository</Typography>
          <List>
            {repos.map((repo) => (
              <ListItemText key={repo._id}>
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </Link>
              </ListItemText>
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

const MapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(MapStateToProps, { getGithubRepos })(ProfileGithub);
