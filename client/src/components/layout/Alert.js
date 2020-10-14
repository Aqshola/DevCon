import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeAlert } from "../../action/alert";
import { SnackbarProvider, useSnackbar } from "notistack";

const AlertCom = ({ alerts, removeAlert }) => {
  const handleClose = (id) => removeAlert(id);
  const Warn = () => {
    if (alerts.value == 0) {
      return <div></div>;
    } else {
      return alerts.value.map((alert) => (
        <Alert
          style={{ marginBottom: "10px" }}
          key={alert.id}
          variant="filled"
          severity={alert.alertType}
        >
          {alert.msg}
        </Alert>
      ));
    }
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      open={alerts.snack}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Warn />
    </Snackbar>
  );
};

AlertCom.propTypes = {};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, { removeAlert })(AlertCom);