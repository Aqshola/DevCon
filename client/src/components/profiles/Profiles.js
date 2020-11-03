import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../action/profile";
import {
  Box,
  Container,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { ProfileItem } from "./ProfileItem";

const style = makeStyles((theme) =>
  createStyles({
    profiles: {
      marginTop: "20px",
      display: "grid",
      width: "90%",
      gridTemplateColumns: "repeat(auto-fit, 300px);",
      gridTemplateRows: "repeat(auto-fill)",
      justifyContent: "space-between",
    },
  })
);

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  const classes = style();
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

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
          <Box className={classes.profiles}>
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
