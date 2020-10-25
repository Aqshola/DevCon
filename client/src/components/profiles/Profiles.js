import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../action/profile";
import { loadUser } from "../../action/auth";
import { Box, Container, Typography } from "@material-ui/core";
import { ProfileItem } from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Box marginY="30px" display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" color="primary">
              Developers
            </Typography>
            <Typography variant="subtitle1">Browse & Connect</Typography>
          </Box>
          <Box marginY="20px">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <Typography variant="subtitle1">No Profile</Typography>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { getProfiles })(Profiles);
