import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeAlert } from "../../action/alert";
import { SnackbarProvider, useSnackbar } from "notistack";

const AlertCom = ({ alerts, removeAlert }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={true}
        key={alert.id}
        onClose={() => removeAlert(alert.id)}
      >
        <Alert
          onClose={() => removeAlert(alert.id)}
          variant="filled"
          severity={alert.alertType}
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    ))
  );
};

AlertCom.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, { removeAlert })(AlertCom);
