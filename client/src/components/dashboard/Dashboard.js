import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
import { loadUser } from "../../action/auth";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import CreateProfile from "../profile-forms/CreateProfile";

const style = makeStyles((theme) => ({
  box: {
    marginTop: "30px",
  },
}));

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  loadUser,
}) => {
  const classes = style();
  useEffect(() => {
    loadUser();
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <Box marginY="30px">
        <Typography variant="h6">Welcome {user && user.name}</Typography>
      </Box>
      {profile !== null ? <> Profile</> : <CreateProfile />}
    </Container>
  );
};

Dashboard.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile, loadUser })(
  Dashboard
);
