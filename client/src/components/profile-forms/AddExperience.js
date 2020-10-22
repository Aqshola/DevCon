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
import { createProfile } from "../../action/profile";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

const style = makeStyles((theme) => ({
  form: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    minHeight: "400px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      height: "500px",
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

const AddExperience = ({ createProfile, history }) => {
  const classes = style();
  const [formData, setformData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
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
          name="jobtitle"
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
          label="From Date"
          type="date"
          size="small"
          variant="outlined"
          name="fromdate"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <Box display="flex">
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Current Job"
          />
        </Box>
        <TextField
          label="To Date"
          type="date"
          size="small"
          variant="outlined"
          name="todate"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="Job Description"
          multiline
          rows={3}
          value={bio}
          name="jobdesc"
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

export default connect(null, { createProfile })(withRouter(AddExperience));
