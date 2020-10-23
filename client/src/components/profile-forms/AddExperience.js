import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Typography,
  makeStyles,
  Button,
  Container,
  Box,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import AlertCom from "../layout/Alert";
import { addExperience } from "../../action/profile";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

const style = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    minHeight: "500px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      height: "600px",
    },
  },
  btn: {
    width: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  box: {
    display: "flex",
    width: "450px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "320px",
      height: "100px",
      justifyContent: "space-around",
    },
  },
}));

const AddExperience = ({ addExperience, history }) => {
  const classes = style();
  const [formData, setformData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [disable, setdisable] = useState(false);
  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };
  return (
    <Container>
      <Typography
        style={{ marginBottom: "30px", marginTop: "30px" }}
        variant="h4"
      >
        Add Experience
      </Typography>
      <FormControl className={classes.form}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Job Title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Company"
          value={company}
          name="company"
          onChange={onChange}
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Location"
          value={location}
          name="location"
          onChange={onChange}
        />

        <TextField
          label="From Date"
          type="month"
          size="small"
          variant="outlined"
          name="from"
          value={from}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <Box display="flex">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() => {
                  setformData({ ...formData, current: !current });
                  setdisable(!disable);
                }}
                checked={current}
                value={current}
              />
            }
            label="Current Job"
          />
        </Box>
        <TextField
          label="To Date"
          type="month"
          size="small"
          variant="outlined"
          name="to"
          value={to}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
          disabled={disable}
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Job Description"
          multiline
          rows={3}
          value={description}
          name="description"
          onChange={onChange}
        />
        <Box className={classes.box}>
          <Button
            onClick={onSubmit}
            color="primary"
            className={classes.btn}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            component={Link}
            to="/dashboard"
          >
            Back
          </Button>
        </Box>
      </FormControl>
      <AlertCom />
    </Container>
  );
};

export default connect(null, { addExperience })(withRouter(AddExperience));
