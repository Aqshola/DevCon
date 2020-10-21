import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
import { loadUser } from "../../action/auth";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import AlertCom from "../layout/Alert";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";

const style = makeStyles((theme) => ({
  box: {
    marginTop: "30px",
  },
  txt: {
    marginLeft: "2px",
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

  const NoProfile = () => {
    return (
      <Box
        minHeight="70px"
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        className={classes.txt}
      >
        <Typography variant="p">
          You have not setup a profile, please add some info
        </Typography>
        <Button
          style={{ width: "fit-content" }}
          size="small"
          disableElevation
          variant="contained"
          color="primary"
          component={Link}
          to="/create-profile"
        >
          Create Profile
        </Button>
      </Box>
    );
  };
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container>
      <Box marginY="30px">
        <Typography
          variant="h4"
          color="primary"
          style={{ marginBottom: "10px" }}
        >
          Dashboard
        </Typography>
        <Typography className={classes.txt} variant="h6">
          Welcome {user && user.name}
        </Typography>
      </Box>
      {profile !== null ? <DashboardActions /> : <NoProfile />}
      <AlertCom />
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
