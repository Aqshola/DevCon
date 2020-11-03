import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { connect } from "react-redux";
import { removeAlert } from "../../action/alert";

const AlertCom = ({ alerts, removeAlert }) => {
  const Warn = () => {
    // eslint-disable-next-line
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
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
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

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, { removeAlert })(AlertCom);
