import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
import { loadUser } from "../../action/auth";
import PropTypes from "prop-types";

const Dashboard = ({ getCurrentProfile, auth, profile, loadUser }) => {
  useEffect(() => {
    loadUser();
    getCurrentProfile();
  }, []);

  return <div>Welcome</div>;
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
