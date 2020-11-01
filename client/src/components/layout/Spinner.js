import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = ({ ...rest }) => {
  return <CircularProgress {...rest} disableShrink />;
};

export default Spinner;
