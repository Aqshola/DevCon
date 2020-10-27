import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../action/profile";
import { useEffect } from "react";
import { Box, Button, Container, makeStyles } from "@material-ui/core";
import { ProfileTop } from "./ProfileTop";
import { Link } from "react-router-dom";

const style = makeStyles((theme) => ({
  split: {
    flexGrow: 1,
  },
  boxContent: {
    marginTop: "30px",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  const classes = style();
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Container>
      <Box className={classes.boxContent}>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <>
            <Box display="flex">
              <Box className={classes.split}>
                <Button component={Link} to="/profiles">
                  {" "}
                  Back to Profiles
                </Button>
              </Box>

              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Button component={Link} to="/edit-profile">
                    Edit Profile
                  </Button>
                )}
            </Box>
            <ProfileTop profile={profile} />
          </>
        )}
      </Box>
    </Container>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
