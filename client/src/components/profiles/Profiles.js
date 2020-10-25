import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../action/profile";
import { loadUser } from "../../action/auth";

const Profiles = () => {
  return <div></div>;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Profiles.PropTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { getProfiles })(Profiles);
