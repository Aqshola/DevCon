import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
export default function ({ open, close, value }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={close}
      key={"top" + "center"}
      autoHideDuration={6000}
    >
      <Alert variant="filled" onClose={close} severity="error">
        {value}
      </Alert>
    </Snackbar>
  );
}
